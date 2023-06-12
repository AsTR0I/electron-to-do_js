// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';




let mainWindow;

// ВСЕ НАСТРОЙКИ ДЛЯ ОКОН: https://runebook.dev/ru/docs/electron/api/browser-window
const createWindow = () => {
  // create the browser window
    mainWindow = new BrowserWindow({
      width: 500,
      height: 540,
      minWidth: 500,
      minHeight: 540,
      title: "Привет",
      backgroundColor: '#2e2c29',
      opacity: 1.0, // не прозрачность окна (от 1 до 0)
      // frame: false, //все кнопки сверху (закрыть, сверунть)
      icon:  "./images/icon.ico",
      //The __dirname string points to the path of the currently executing script (in this case, your project's root folder).
      // The path.join API joins multiple path segments together, creating a combined path string that works across all platforms.
      webPreferences: {
        nodeIntegration: true,
        enableRemoteModelu: true,
      },
      // closable: false, // можно ли закрыть окно.
      // minimizable: false, // можно ли свернуть окно.
       resizable: true, // можно ли изменять размер окна. 
      // movable: false, // можно ли перемещать окно.
      // alwaysOnTop: true, // должно ли окно всегда оставаться поверх других окон.
      // focusable: false, //  можно ли сфокусировать окно.
      // fullscreen: true , // должно ли окно отображаться в полноэкранном режиме. 
      // skipTaskbar: true, //показывать ли окно на панели задач.
      // frame: false, // укажите значение false , чтобы создать окно без рамки.
      // // parent BrowserWindow (необязательно) - укажите родительское окно. По умолчанию - null .
      // transparent: true, // делает окно прозрачным .
    })

    // const conf = new BrowserWindow({
    //   width: 600,
    //   height: 600,
    //   minWidth: 600,
    //   minHeight: 600,
    //   title: "Настройки",
    //   backgroundColor: "red",
    // })

  
    // load the index.html off the app
    mainWindow.loadFile('./src/index.html')
  }



  // Open the DevTools.
  // mainWindow.webContents.openDevTools()


// Quit when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
  app.whenReady().then(() => {
    createWindow()
  })

app.on('activate', ()=>{
  if (BrowserWindow.getAllWindows().length === 0){
    createWindow()
  }
})