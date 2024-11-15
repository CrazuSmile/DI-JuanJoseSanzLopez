const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');
let loginWindow;
let registerWindow;

function createLoginWindow() {
    loginWindow = new BrowserWindow({
        webPreferences: {
            preload: path.join(__dirname, 'login/preload.js')
        },

    });
    loginWindow.loadFile('login/index.html');
}


function createRegisterWindow() {
    registerWindow = new BrowserWindow({
        webPreferences: {
            preload: path.join(__dirname, 'register/preload.js')
        },
    });
    registerWindow.loadFile('register/index.html');
}


app.whenReady().then(createLoginWindow);

ipcMain.on('open-register', () => {
    if (loginWindow) {
        loginWindow.close();
    }
    createRegisterWindow();
});

ipcMain.on('open-login', () => {
    if (registerWindow) {
        registerWindow.close();
    }
    createLoginWindow();
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

try {
    require('electron-reloader')(module, {
        debug: true,
        watchRenderer: true
    })
} catch (_) { }