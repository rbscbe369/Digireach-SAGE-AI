export const SAGE_VERSION = '1.0.0';

export class Logger {
  static info(message: string, context?: any) {
    console.log(`[INFO] ${message}`, context || '');
  }

  static error(message: string, error?: any) {
    console.error(`[ERROR] ${message}`, error || '');
  }

  static warn(message: string, context?: any) {
    console.warn(`[WARN] ${message}`, context || '');
  }
}

export class ErrorHandler {
  static handle(error: Error) {
    Logger.error('Unhandled Exception', error);
    // Future: Send to Sentry/Datadog
  }
}
