"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queues = void 0;
const bullmq_1 = require("bullmq");
const core_1 = require("@sagemodules/core");
const headroom_ai_1 = require("headroom-ai");
const openai_1 = __importDefault(require("openai"));
const connection = {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379', 10),
};
// Define standard queues
exports.Queues = {
    Research: new bullmq_1.Queue('ResearchQueue', { connection }),
    Publishing: new bullmq_1.Queue('PublishingQueue', { connection }),
    Analytics: new bullmq_1.Queue('AnalyticsQueue', { connection }),
};
// Initialize OpenAI client. 
// If HEADROOM_PROXY_URL is set in environment (e.g., http://localhost:8787/v1), 
// it will route through the proxy automatically.
const openai = new openai_1.default({
    apiKey: process.env.OPENAI_API_KEY || 'mock-key',
    baseURL: process.env.HEADROOM_PROXY_URL || undefined, // e.g., 'http://localhost:8787/v1' for proxy mode
});
// Basic worker foundation
const researchWorker = new bullmq_1.Worker('ResearchQueue', async (job) => {
    core_1.Logger.info(`Processing Research Job ${job.id}`, job.data);
    try {
        const { topic, rawContextData } = job.data || {};
        if (!rawContextData) {
            core_1.Logger.warn(`No raw context data provided for Job ${job.id}`);
            return;
        }
        core_1.Logger.info(`Compressing large research context data (Size: ${rawContextData.length} chars)`);
        // 1. Inline context compression using headroom-ai
        const rawMessages = [
            {
                role: 'system',
                content: 'You are an AI research assistant. Summarize key insights, structured data, and key figures from the provided text.'
            },
            {
                role: 'user',
                content: `Topic: ${topic}\n\nRaw Context Data:\n${rawContextData}`
            }
        ];
        // Compresses payload by 60-95% by caching originals locally and passing lean context
        const compressedMessages = await (0, headroom_ai_1.compress)(rawMessages);
        core_1.Logger.info('Compression complete. Sending minimized context payload to OpenAI...');
        // 2. Execute call with minimized token footprint
        const response = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: compressedMessages,
        });
        const summary = response.choices[0]?.message?.content;
        core_1.Logger.info(`Research summary generated successfully for Job ${job.id}`);
        // Return the summary and token saving metrics
        return {
            summary,
            originalLength: JSON.stringify(rawMessages).length,
            compressedLength: JSON.stringify(compressedMessages).length,
        };
    }
    catch (error) {
        core_1.Logger.error(`Error in Research Job ${job.id} processing:`, error);
        throw error;
    }
}, { connection });
researchWorker.on('completed', (job) => {
    core_1.Logger.info(`Research Job ${job.id} completed successfully.`);
});
researchWorker.on('failed', (job, err) => {
    core_1.Logger.error(`Research Job ${job?.id} failed.`, err);
});
core_1.Logger.info('Background Processing Engine started.');
