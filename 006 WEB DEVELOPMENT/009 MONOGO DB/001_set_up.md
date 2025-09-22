
# MongoDB Installation & Setup on macOS

This guide walks you through **full MongoDB installation and setup** on macOS.

---
### 1. Install Homebrew


    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

- **Installs Homebrew, the package manager for macOS.**
-
       echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
-
      eval "$(/opt/homebrew/bin/brew shellenv)"

✅ Adds Homebrew to your PATH so the brew command works.

⸻

### 2. Verify Homebrew Installation

    brew --version

Check if Homebrew is installed correctly.

⸻

### 3. Add the MongoDB Repository

    brew tap mongodb/brew

Allows Homebrew to install official MongoDB packages.

⸻

### 4. Install MongoDB Community Edition

    brew install mongodb-community@7.0

Installs the latest stable MongoDB Community Edition.

⸻

### 5. Start MongoDB Service

    brew services start mongodb/brew/mongodb-community@7.0

Starts MongoDB as a background service for your user account.

⸻

### 6. Verify MongoDB Service

    brew services list

Check if mongodb/brew/mongodb-community is listed as started.

⸻

### 7. Connect to MongoDB Shell

    mongosh

Open the MongoDB shell to interact with databases.

⸻

### 8. Install MongoDB Compass (GUI)

👉 Download MongoDB Compass
Graphical interface to manage MongoDB visually.

⸻

### 9. Stop MongoDB Service

-      brew services stop mongodb/brew/mongodb-community@7.0


-     Stop MongoDB service when not needed.

⸻

### 10. Uninstall MongoDB

-     brew uninstall mongodb-community@7.0
-     brew untap mongodb/brew

Completely remove MongoDB from your system.

⸻

### 11. Useful MongoDB Commands

-     show dbs         # List databases
-     use <dbname>     # Switch to database
-     db.stats()       # Database stats
-     db.collection.find() # Query collection

Common MongoDB shell commands for daily usage.

---


