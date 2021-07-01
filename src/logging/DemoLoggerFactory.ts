import type { Logger, LoggerFactory } from '@solid/community-server';
import { CustomLogger } from './CustomLogger';

/**
 * Uses the winston library to create loggers for the given logging level.
 * By default, it will print to the console with colorized logging levels.
 *
 * This creates instances of {@link CustomLogger}.
 */
export class CustomFactory implements LoggerFactory {
  private readonly level: string;
  public constructor(level: string) {
    this.level = level;
  }

  public createLogger(label: string): Logger {
    return new CustomLogger(label, this.level);
  }
}

