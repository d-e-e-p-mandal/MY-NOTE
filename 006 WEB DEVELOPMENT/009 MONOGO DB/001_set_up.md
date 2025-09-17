<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
}

h1, h3 {
  border-bottom: 2px solid #16a085;
  padding-bottom: 5px;
}

h1 { color: #8e44ad; } /* purple */
h3 { color: #16a085; } /* dark cyan */

.code-section {
  background-color: #ecf0f1;
  border-left: 5px solid #16a085;
  padding: 15px;
  margin: 20px 0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

.command {
  font-family: 'Fira Code', 'Roboto Mono', monospace;
  background-color: #34495e; /* dark slate blue */
  color: #f39c12; /* soft orange text */
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  font-size: 1.1em;
  white-space: pre-wrap;
  word-break: break-all;
  box-shadow: 0 0 10px rgba(52, 152, 219, 0.3);
}

.command a {
  color: #e67e22; /* orange link */
  text-decoration: underline;
}

.info p {
  margin: 0;
  font-size: 0.9em;
  color: #1abc9c; /* teal */
}

.info { 
  background-color: #d1f2eb; 
  padding:5px 10px; 
  border-left:3px solid #1abc9c; 
  border-radius:3px; 
}

a {
  color: #e67e22; /* orange */
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>

# MongoDB Installation & Setup on macOS

This guide walks you through **full MongoDB installation and setup** on macOS.

---

### 1. Install Homebrew

<div class="code-section">
  <div class="command">
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  </div>
  <div class="info">
    <p>Installs Homebrew, the package manager for macOS.</p>
  </div>
</div>

<div class="code-section">
  <div class="command">
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
  </div>
  <div class="info">
    <p>✅ You installed Homebrew, but your shell doesn’t yet know where brew is. That’s why brew --version says command not found. You just need to add Homebrew to your PATH.
</p>
  </div>
</div>
---

### 2. Verify Homebrew Installation

<div class="code-section">
  <div class="command">
brew --version
  </div>
  <div class="info">
    <p>Check if Homebrew is installed correctly.</p>
  </div>
</div>

---

### 3. Add the MongoDB Repository

<div class="code-section">
  <div class="command">
brew tap mongodb/brew
  </div>
  <div class="info">
    <p>Allows Homebrew to install official MongoDB packages.</p>
  </div>
</div>

---

### 4. Install MongoDB Community Edition

<div class="code-section">
  <div class="command">
brew install mongodb-community@7.0
  </div>
  <div class="info">
    <p>Installs the latest stable MongoDB Community Edition.</p>
  </div>
</div>

---

### 5. Start MongoDB Service

<div class="code-section">
  <div class="command">
brew services start mongodb/brew/mongodb-community@7.0
  </div>
  <div class="info">
    <p>Starts MongoDB as a background service for your user account.</p>
  </div>
</div>

---

### 6. Verify MongoDB Service

<div class="code-section">
  <div class="command">
brew services list
  </div>
  <div class="info">
    <p>Check if `mongodb/brew/mongodb-community` is listed as `started`.</p>
  </div>
</div>

---

### 7. Connect to MongoDB Shell

<div class="code-section">
  <div class="command">
mongosh
  </div>
  <div class="info">
    <p>Open the MongoDB shell to interact with databases.</p>
  </div>
</div>

---

### 8. Install MongoDB Compass (GUI)

<div class="code-section">
  <div class="command">
Download from: <a href="https://www.mongodb.com/try/download/compass">https://www.mongodb.com/try/download/compass</a>
  </div>
  <div class="info">
    <p>Graphical interface to manage MongoDB visually.</p>
  </div>
</div>

---

### 9. Enable MongoDB to Start at Login

<!-- <div class="code-section">
  <div class="command">
brew services start mongodb/brew/mongodb-community
  </div>
  <div class="info">
    <p>MongoDB will automatically start whenever you log in.</p>
  </div>
</div> -->

---

### 10. Stop MongoDB Service

<div class="code-section">
  <div class="command">
brew services stop mongodb/brew/mongodb-community@7.0
  </div>
  <div class="info">
    <p>Stop MongoDB service when not needed.</p>
  </div>
</div>

---

### 11. Uninstall MongoDB

<div class="code-section">
  <div class="command">
brew uninstall mongodb-community@7.0
brew untap mongodb/brew
  </div>
  <div class="info">
    <p>Completely remove MongoDB from your system.</p>
  </div>
</div>

---

### 12. Useful MongoDB Commands

<div class="code-section">
  <div class="command">
show dbs       # List databases
use <dbname>   # Switch to database
db.stats()     # Database stats
db.collection.find() # Query collection
  </div>
  <div class="info">
    <p>Common MongoDB shell commands for daily usage.</p>
  </div>
</div>