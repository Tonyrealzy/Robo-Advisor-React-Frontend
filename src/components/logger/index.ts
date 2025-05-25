type LogLevel = 'log' | 'warn' | 'error';

const Logger = (level: LogLevel, message: any, ...otherMessage: any): void => {
  if (import.meta.env.VITE_APP_NODE_ENV !== 'production') {
    console[level](message, ...otherMessage);
  } else {
    console.log('Check server logs!');
  }
};

export const logger = (message: any, ...otherMessage: any): void => {
  Logger('log', message, ...otherMessage);
};

export const logWarning = (message: any, ...otherMessage: any): void => {
  Logger('warn', message, ...otherMessage);
};

export const logError = (message: any, ...otherMessage: any): void => {
  Logger('error', message, ...otherMessage);
};
