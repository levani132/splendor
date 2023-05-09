import { LogsBuffer } from 'models/LogsBuffer';

export const Logger = {
  error(error: any) {
    LogsBuffer.addLog(error);
    console.log('[ERROR]', error);
  },
};
