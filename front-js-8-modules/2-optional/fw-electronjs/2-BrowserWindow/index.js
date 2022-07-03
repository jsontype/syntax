const { app, BrowserWindow } = require('electron');

let main = null;
let child = null;

app.on('ready', () => {
    console.log('ready');

    // 첫번째 윈도우
    main = new BrowserWindow({
        width: 800, // 너비
        height: 800, // 높이
        show: false, // 처음에 보여주지 않다가 ready-to-show 이벤트가 오면 화면을 보여 줍니다.
        backgroundColor: '#4c5152', // 배경 색
        titleBarStyle: 'hidden',
        movable: false,
    });

    main.loadURL(`file://${__dirname}/index.html`);

    main.once('ready-to-show', () => {
        // renderer process 가 해당 페이지 렌더링을 완료할 때,
        // ready-to-show 이벤트가 발생합니다.
        main.show();
    });

    main.on('close', () => {
        console.log('main win close');
    });

    main.on('closed', () => {
        console.log('main win closed');
    });

    main.on('show', () => {
        console.log('main win show');
    });

    main.on('hide', () => {
        console.log('main win hide');
    });

    main.on('blur', () => {
        console.log('main win blur');
    });

    main.on('focus', () => {
        console.log('main win focus');
    });

    // 두번째 윈도우
    child = new BrowserWindow({
        width: 600,
        height: 600,
        parent: main,
        minWidth: 200,
        minHeight: 200,
        maxWidth: 500,
        maxHeight: 500,
        movable: true,
        title: 'child',
    });

    child.loadURL('https://github.com');

    child.once('ready-to-show', () => {
        child.show();
    });

    child.on('move', () => {
        console.log('child win move');
    });

    child.on('moved', () => {
        console.log('child win moved');
    });
});
