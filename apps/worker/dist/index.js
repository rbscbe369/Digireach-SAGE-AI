"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queues = void 0;
const bullmq_1 = require("bullmq");
const core_1 = require("@sagemodules/core");
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
// Basic worker foundation
const researchWorker = new bullmq_1.Worker('ResearchQueue', async (job) => {
    core_1.Logger.info(`Processing Research Job ${job.id}`, job.data);
    // Logic will be added in Layer 2
}, { connection });
researchWorker.on('completed', (job) => {
    core_1.Logger.info(`Research Job ${job.id} completed successfully.`);
});
researchWorker.on('failed', (job, err) => {
    core_1.Logger.error(`Research Job ${job?.id} failed.`, err);
});
core_1.Logger.info('Background Processing Engine started.');
