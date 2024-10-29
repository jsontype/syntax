const { app, BrowserWindow, ipcMain } = require('electron');

let win = null;

app.on('ready', () => {
    win = new BrowserWindow({
        // 브라우저에서 module, require을 사용하기 위해서는 아래와 같이 옵션을 사용해줘야 합니다.
        // 5.0 이상 버전부터는 default 값이 false입니다.
        // 아래 옵션을 사용하기에 앞서 결정을 내리기 전에 보안 및 책임 가이드를 읽어보는 것을 권장합니다.
        // https://www.electronjs.org/docs/tutorial/security
        // https://www.electronjs.org/docs/tutorial/security#2-do-not-enable-nodejs-integration-for-remote-content

        webPreferences: {
            nodeIntegration: true,
        },
    });
    win.loadURL(`file://${__dirname}/index.html`);
    win.webContents.openDevTools(); // devtools 를 표시

    ipcMain.on('async-message', (event, arg) => {
        console.log(arg); // 'async ping'
        event.sender.send('async-reply', 'async pong');
    });

    ipcMain.on('sync-message', (event, arg) => {
        console.log(arg); // 'sync ping'
        event.returnValue = 'sync pong';
    });
});
