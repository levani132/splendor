import { action, computed, makeObservable, observable } from 'mobx';

class LogsBufferImpl {
  @observable buffer: string[] = [];

  constructor() {
    makeObservable(this);
  }

  @computed get hasLogs() {
    return !!this.buffer.length;
  }

  @action addLog(message: string) {
    this.buffer.push(message);
  }

  @action dismiss() {
    this.buffer.shift();
  }
}

export const LogsBuffer = new LogsBufferImpl();
