#  READ ME FILE 
# My Portfolio 

This is a tiny static portfolio site you can run on your own computer. Below are simple, clear steps to open the page, test the UI (dark mode + contact form), and fix common problems.

Files in this folder
- index.html — the page you open
- script.js — JavaScript for the toggle and form
- style.css — optional styles
- README.md — this file

Quick run — pick one method

1) Open directly (fast)
- Open PowerShell and run:
  ```
  Start-Process "C:\Users\student\Desktop\portfo\index.html"
  ```
  Or:
  ```
  ii "C:\Users\student\Desktop\portfo\index.html"
  ```
- The page opens in your default browser. No server needed.

2) Local HTTP server (recommended)
- Open PowerShell:
  ```
  cd "C:\Users\student\Desktop\portfo"
  python -m http.server 8000 --bind 127.0.0.1
  ```
- Open this URL in your browser:
  http://127.0.0.1:8000

3) VS Code Live Server
- Open the folder in VS Code.
- Install the Live Server extension.
- Right‑click `index.html` → Open with Live Server.

What to try on the page
- Click "Toggle Dark Mode" — background and text should switch.
- Fill the contact form (Name, Email, Message) and click Send.
  - If a field is empty, you'll see a red error message.
  - If all fields are filled, you'll see a green success message and the form will clear.

If something goes wrong — quick fixes

- "ERR_CONNECTION_REFUSED" when using http://localhost:8000
  - Make sure the Python server is running and shows:

    Serving HTTP on 127.0.0.1 port 8000 (http://127.0.0.1:8000/) ...

  - Test from PowerShell:
  
    curl.exe http://localhost:8000
    Test-NetConnection -ComputerName localhost -Port 8000


- PowerShell error using start "" "file"
  - Use Start-Process or ii instead (see "Open directly" above).

- A different app is using port 8000
  - Check:

    netstat -ano | findstr :8000

  - If a PID appears, list and stop it:

    tasklist /FI "PID eq <PID>"
    Stop-Process -Id <PID> -Force


- Browser console shows JavaScript errors
  - Open DevTools (F12) → Console, copy the exact error text and paste it here.
  - Confirm `index.html` includes:
html
    <script src="script.js"></script>
 
  - Confirm element IDs exist: `toggleMode`, `contactForm`, `name`, `email`, `message`, `formMessage`.

Temporary firewall allow (only if needed)

netsh advfirewall firewall add rule name="Allow8000" dir=in action=allow protocol=TCP localport=8000
# remove after testing:
# netsh advfirewall firewall delete rule name="Allow8000"


How to ask for help
 Copy the full text of any terminal output or browser console error and paste it when you ask. That lets me give precise next steps.

That's it — open the file with one of the methods above, try the toggle and form, and tell me any exact error text if it fails.