import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels =
  | 'ipc-example'
  | 'fetch-tasks'
  | 'get-task-status'
  | 'task-status-update';

const electronHandler = {
  ipcRenderer: {
    sendMessage(channel: Channels, ...args: unknown[]) {
      ipcRenderer.send(channel, ...args);
    },
    on(
      channel: Channels,
      func: (event: IpcRendererEvent, ...args: any[]) => void,
    ) {
      const subscription = (event: IpcRendererEvent, ...args: any[]) =>
        func(event, ...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(
      channel: Channels,
      func: (event: IpcRendererEvent, ...args: any[]) => void,
    ) {
      ipcRenderer.once(channel, (event: IpcRendererEvent, ...args: any[]) =>
        func(event, ...args),
      );
    },
    invoke(channel: Channels, ...args: unknown[]) {
      return ipcRenderer.invoke(channel, ...args);
    },
  },
};

contextBridge.exposeInMainWorld('electron', electronHandler);

export type ElectronHandler = typeof electronHandler;
