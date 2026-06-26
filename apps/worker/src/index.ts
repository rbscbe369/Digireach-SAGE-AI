import { Worker, Queue } from 'bullmq';
import { Logger } from '@sagemodules/core';
import { compress } from 'headroom-ai';
import OpenAI from 'openai';

const connection = {
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379', 10),
};

// Define standard queues
export const Queues = {
  Research: new Queue('ResearchQueue', { connection }),
  Publishing: new Queue('PublishingQueue', { connection }),
  Analytics: new Queue('AnalyticsQueue', { connection }),
};

// Initialize OpenAI client. 
// If HEADROOM_PROXY_URL is set in environment (e.g., http://localhost:8787/v1), 
// it will route through the proxy automatically.
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'mock-key',
  baseURL: process.env.HEADROOM_PROXY_URL || undefined, // e.g., 'http://localhost:8787/v1' for proxy mode
});

// Basic worker foundation
const researchWorker = new Worker(
  'ResearchQueue',
  async (job) => {
    Logger.info(`Processing Research Job ${job.id}`, job.data);
    
    try {
      const { topic, rawContextData } = job.data || {};
      if (!rawContextData) {
        Logger.warn(`No raw context data provided for Job ${job.id}`);
        return;
      }

      Logger.info(`Compressing large research context data (Size: ${rawContextData.length} chars)`);

      // 1. Inline context compression using headroom-ai
      const rawMessages = [
        {
          role: 'system' as const,
          content: 'You are an AI research assistant. Summarize key insights, structured data, and key figures from the provided text.'
        },
        {
          role: 'user' as const,
          content: `Topic: ${topic}\n\nRaw Context Data:\n${rawContextData}`
        }
      ];

      // Compresses payload by 60-95% by caching originals locally and passing lean context
      const compressedMessages = await compress(rawMessages);

      Logger.info('Compression complete. Sending minimized context payload to OpenAI...');

      // 2. Execute call with minimized token footprint
      const response = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: compressedMessages as any,
      });

      const summary = response.choices[0]?.message?.content;
      Logger.info(`Research summary generated successfully for Job ${job.id}`);
      
      // Return the summary and token saving metrics
      return {
        summary,
        originalLength: JSON.stringify(rawMessages).length,
        compressedLength: JSON.stringify(compressedMessages).length,
      };

    } catch (error: any) {
      Logger.error(`Error in Research Job ${job.id} processing:`, error);
      throw error;
    }
  },
  { connection }
);

researchWorker.on('completed', (job) => {
  Logger.info(`Research Job ${job.id} completed successfully.`);
});

researchWorker.on('failed', (job, err) => {
  Logger.error(`Research Job ${job?.id} failed.`, err);
});

Logger.info('Background Processing Engine started.');
