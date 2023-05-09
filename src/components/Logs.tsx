import { observer } from 'mobx-react-lite';
import { FC, useCallback, useEffect, useState } from 'react';

import { useLogsBuffer } from 'contexts/LogsBufferContext';

class LogEntity {
  timeout: NodeJS.Timeout;
  timeLeft: number;
  startTime: Date;

  constructor(public message: string, private onDismiss: () => void) {
    this.timeout = setTimeout(onDismiss, 5000);
    this.timeLeft = 5000;
    this.startTime = new Date();
  }

  pauseTimeout() {
    if (this.timeLeft < 0) {
      return;
    }
    if (new Date().getTime() - this.startTime.getTime() > this.timeLeft) {
      return;
    }
    clearTimeout(this.timeout);
    this.timeLeft -= new Date().getTime() - this.startTime.getTime();
  }

  resumeTimeout() {
    this.timeout = setTimeout(this.onDismiss, this.timeLeft);
    this.startTime = new Date();
  }
}

export const Logs: FC = observer(() => {
  const logsBuffer = useLogsBuffer();

  const [activeLog, setActiveLog] = useState<LogEntity>();

  const dismissMessage = useCallback(() => {
    logsBuffer.dismiss();
    setActiveLog(undefined);
  }, []);

  useEffect(() => {
    if (logsBuffer.hasLogs) {
      const message = logsBuffer.buffer[0];
      setActiveLog(new LogEntity(message, dismissMessage));
    }
  }, [logsBuffer.buffer.length]);

  const handleMouseEnter = useCallback(
    () => activeLog?.pauseTimeout(),
    [activeLog]
  );
  const handleMouseLeave = useCallback(
    () => activeLog?.resumeTimeout(),
    [activeLog]
  );

  return activeLog ? (
    <div className="absolute inset-0 flex justify-center items-center z-20">
      <div
        className="bg-white p-2 drop-shadow-md rounded-lg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="bg-primary-bg flex flex-col rounded p-2 gap-4 max-w-md">
          <div className="text-center">{activeLog.message}</div>
          <button className="font-pacifico text-lg" onClick={dismissMessage}>
            OK
          </button>
        </div>
      </div>
    </div>
  ) : null;
});
