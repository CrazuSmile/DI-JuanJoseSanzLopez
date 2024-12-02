const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    changeRegister: () => ipcRenderer.send('open-register')
});