const { app, BrowserWindow } = require('electron');

let win = null; // BrowserWindow
// 윈도우, tray 와 같은 객체는 전역에 유지 해야합니다.
// 자동으로 메모리가 반환(garbage collection)될 때 창이 멋대로 닫혀버립니다.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management

// app 은 애플리케이션의 이벤트 생명 주기를 제어합니다.
// [Reference] https://electronjs.org/docs/api/app

// 애플리케이션이 기본적인 시작 준비를 마치면 발생하는 이벤트입니다.
app.on('will-finish-launching', () => {
    // Windows 와 Linux 는 ready 이벤트와 동일
    // macOS 는 NSApplication > applicationWillFinishLaunching 에 대한 알림으로 표현 됩니다.

    console.log('will-finish-launching');
});

// Electron 이 초기화되어 준비된 상태일 때 발생하는 이벤트입니다
app.on('ready', (launchInfo) => {
    console.log(`ready : ${JSON.stringify(launchInfo)}`);
    console.log(`isReady : ${app.isReady()}`);

    // BrowserWindow 는 브라우저 윈도우를 생성하고 제어합니다.
    win = new BrowserWindow({ width: 800, height: 600 });

    // 로딩할 컨텐츠 삽입
    win.loadURL(`file://${__dirname}/index.html`);

    // 원격 URL 도 로드할 수 있습니다.
    // win.loadURL('https://github.com');

    // process 정보 (https://electronjs.org/docs/api/process)
    const { type, versions } = process;
    console.log(`process type : ${type}`);
    console.log(`process version : ${JSON.stringify(versions)}`);
});

// 모든 윈도우가 종료되었을 때 발생하는 이벤트입니다.
app.on('window-all-closed', () => {
    // 이 이벤트를 구독하지 않고 모든 창이 닫혀있다면, 기본 동작은 앱을 종료시키는 것입니다.
    // (before-quit => will-quit => quit)

    console.log('window-all-closed');
    app.quit(); // 애플리케이션을 종료
});

// 앱이 종료가 되면서 앱의 모든 윈도우를 닫기 시작 전에 발생하는 이벤트입니다.
app.on('before-quit', (event) => {
    // 이 이벤트는 이미 닫혀있어도 불립니다.
    // event.preventDefault() 를 호출하면 기본 동작인 어플리케이션 종료를 하지 않습니다.

    console.log('before-quit');
});

// 모든 윈도우가 닫히고 앱이 종료하기 직전에 불립니다.
app.on('will-quit', (event) => {
    // event.preventDefault() 를 호출하면 기본 동작인 어플리케이션 종료를 하지 않습니다.

    console.log('will-quit');
});

// 최종적으로 앱이 종료할 때 발생됩니다.
app.on('quit', (event, exitCode) => {
    // Window 운영체제에서는 시스템 종료, 재시작 또는 로그아웃으로 앱이 종료되는 경우는 해당 이벤트가 발생하지 않습니다.

    console.log(`quit : ${JSON.stringify(event)}, ${exitCode}`);
});
