const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 700,
    title: 'Simplesmente, um Coração. <3',
    backgroundColor: '#1a0010',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
    icon: undefined,
    resizable: true,
    center: true,
  });

  win.loadFile('index.html');
  win.setMenuBarVisibility(false);
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
