const { app, BrowserWindow } = require('electron');

let main = null;

app.on('ready', () => {
    main = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
        },
    });
    main.loadURL(`file://${__dirname}/index.html`);
    main.webContents.openDevTools();
});
