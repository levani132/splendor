import { createContext, useContext } from 'react';

import { LogsBuffer } from 'models/LogsBuffer';

export const LogsBufferContext = createContext(LogsBuffer);

export const useLogsBuffer = () => useContext(LogsBufferContext);
