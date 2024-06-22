/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import path from 'path';
import { app, BrowserWindow, shell, ipcMain } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import MenuBuilder from './menu';
import { resolveHtmlPath } from './util';
import fs from 'fs';

class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow: BrowserWindow | null = null;

ipcMain.on('ipc-example', async (event, arg) => {
  const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
  console.log(msgTemplate(arg));
  event.reply('ipc-example', msgTemplate('pong'));
});

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDebug =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDebug) {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS'];

  return installer
    .default(
      extensions.map((name) => installer[name]),
      forceDownload,
    )
    .catch(console.log);
};

const createWindow = async () => {
  if (isDebug) {
    await installExtensions();
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728,
    minWidth: 1100,
    minHeight: 700,
    maxWidth: 1280,
    maxHeight: 900,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    },
  });

  mainWindow.loadURL(resolveHtmlPath('index.html'));

  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();

  // Open urls in the user's browser
  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: 'deny' };
  });

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();
};

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app
  .whenReady()
  .then(() => {
    createWindow();
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) createWindow();
    });
  })
  .catch(console.log);

ipcMain.handle('fetch-tasks', async () => {
  try {
    const filePath = path.join(app.getAppPath(), 'data.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    const tasks = JSON.parse(data);
    return tasks;
  } catch (error) {
    console.error('Error reading tasks file:', error);
    throw new Error('Failed to fetch tasks');
  }
});

const statuses = ['STARTING', 'GETTING', 'POSTING', 'COMPLETED'];
const ids = [
  { id: 1, message: '', statusIndex: 0 },
  { id: 3, message: '', statusIndex: 0 },
  { id: 6, message: '', statusIndex: 0 },
  { id: 7, message: '', statusIndex: 0 },
];

function updateTaskMessages() {
  ids.forEach((task) => {
    task.statusIndex = (task.statusIndex + 1) % statuses.length;
    task.message = statuses[task.statusIndex];
  });
}

ipcMain.handle('get-task-status', async (event, taskId: number) => {
  updateTaskMessages();
  return ids;
});

setInterval(() => {
  updateTaskMessages();

  if (mainWindow) {
    mainWindow.webContents.send('task-status-update', ids);
  }
}, 1000);

ipcMain.handle('group-names', async () => {
  try {
    const filePath = path.join(app.getAppPath(), 'data.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    const groups = JSON.parse(data);
    const groupNames = groups.map((group: { name: string }) => group.name);
    return groupNames;
  } catch (error) {
    console.error('Error reading tasks file:', error);
    throw new Error('Failed to fetch tasks');
  }
});
