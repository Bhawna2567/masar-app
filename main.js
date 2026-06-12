const { app, BrowserWindow, Menu, shell } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1180,
    height: 860,
    minWidth: 380,
    minHeight: 600,
    title: "Masar",
    backgroundColor: "#0b6e4f",
    icon: path.join(__dirname, "build", "icon.png"),
    webPreferences: { contextIsolation: true }
  });

  win.loadFile(path.join(__dirname, "app", "index.html"));

  // Open any external links (target=_blank) in the system browser, not a new app window.
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith("http")) shell.openExternal(url);
    return { action: "deny" };
  });
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
