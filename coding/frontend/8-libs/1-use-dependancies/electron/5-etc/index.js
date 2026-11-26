const { app, BrowserWindow, Tray, Menu } = require('electron');

let win = null;

app.on('ready', () => {
    win = new BrowserWindow({
        width: 1000,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });
    win.loadURL(`file://${__dirname}/index.html`);
    win.webContents.openDevTools();

    // tray : 시스템의 알림 영역의 아이콘
    const tray = new Tray(`${__dirname}/tray.png`);

    const contextMenu = Menu.buildFromTemplate([
        { label: 'Item1', type: 'radio' },
        { label: 'Item2', type: 'radio', checked: true },
    ]);

    tray.setContextMenu(contextMenu);

    tray.setToolTip('This is my application.');

    tray.on('click', () => {
        console.log('tray click');
    });

    tray.on('right-click', () => {
        console.log('tray right-click');
    });
});
