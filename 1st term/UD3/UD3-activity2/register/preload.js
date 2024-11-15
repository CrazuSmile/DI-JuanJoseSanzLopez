const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    changeLogin: () => ipcRenderer.send('open-login')
});