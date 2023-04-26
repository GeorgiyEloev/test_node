import { format, createLogger, transports } from 'winston';

const logFormat = format.printf(
  ({ level, message, timestamp, stack }) => `[${level}]: ${stack || message} [${timestamp}]`,
);

export const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.colorize(),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    logFormat,
  ),
  transports: [new transports.Console()],
});
