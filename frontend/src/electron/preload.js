/* eslint-disable no-undef */
import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  sendMessage: (data) => ipcRenderer.send("message", data),
  onMessage: (callback) => ipcRenderer.on("message", callback),
});
