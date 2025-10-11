/* eslint-disable no-undef */
import { app, BrowserWindow } from "electron";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: join(__dirname, "preload.js"),
    },
  });

  win.loadURL("http://localhost:5173"); // Vite 개발 서버
}

app.whenReady().then(() => {
  createWindow();
});
