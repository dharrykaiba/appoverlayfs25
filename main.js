// main.js
const { app, BrowserWindow } = require("electron");
const path = require("path");

// ✅ Intentar iniciar backend manualmente y manejar errores
try {
  console.log("🟡 Iniciando backend...");
  require("./backend/src/index"); // Esto debe iniciar el servidor Express
  console.log("🟢 Backend iniciado con éxito");
} catch (error) {
  console.error("🔴 Error al iniciar el backend:", error);
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true, // ✅ Necesario para acceder a process
      contextIsolation: false, // ✅ Necesario para acceder a process
    },
  });

  win.loadFile(path.join(__dirname, "frontend/build/index.html"));
  //win.webContents.openDevTools(); // Abre DevTools para depuración
}

app.whenReady().then(() => {
  createWindow();
});
