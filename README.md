# Masar — Desktop installers (.dmg for Mac, .exe for Windows)

This folder wraps the Masar app as a desktop application (using Electron) and builds proper installers:

- **macOS** → `Masar-1.0.0.dmg`
- **Windows** → `Masar Setup 1.0.0.exe`

> **Why a build step?** A real macOS `.dmg` can only be produced on macOS, and a Windows `.exe` is normally produced on Windows. You don't need to own both machines — the easiest option below builds **both** for free in the cloud.

---

## Option A — Build both in the cloud (recommended, no tools to install)

1. Create a free account at **github.com** if you don't have one.
2. Make a new repository and upload the **contents of this folder** (so `package.json` is at the top level of the repo).
3. In the repo, open the **Actions** tab → select **"Build installers"** → **Run workflow**.
4. Wait ~5–10 minutes. When it finishes, open the run and download the artifacts:
   - `masar-macos-dmg` → contains the `.dmg`
   - `masar-windows-exe` → contains the `.exe`

That's it — share those files with teachers/parents to install Masar.

*(The workflow file is already included at `.github/workflows/build-installers.yml`.)*

---

## Option B — Build locally

You need **Node.js 18+** (nodejs.org). Then in this folder:

```bash
npm install
```

**On a Mac (produces the .dmg):**
```bash
npm run dist:mac
```

**On Windows (produces the .exe):**
```bash
npm run dist:win
```

The installer appears in the `installers/` folder.

To just run the app without building an installer:
```bash
npm start
```

---

## Notes
- The app and all curriculum live in `app/` (`index.html`, `curriculum.js`, `sw.js`). To update the curriculum later, replace `app/curriculum.js` and rebuild.
- The installers are **unsigned**. On first launch:
  - **macOS**: right-click the app → **Open** (once), to bypass the "unidentified developer" warning. For wide distribution you'd enrol in the Apple Developer Program (US$99/yr) and notarize.
  - **Windows**: click **More info → Run anyway** on the SmartScreen prompt. For wide distribution you'd buy a code-signing certificate.
- App data (students, answers, progress) is stored on each device.
