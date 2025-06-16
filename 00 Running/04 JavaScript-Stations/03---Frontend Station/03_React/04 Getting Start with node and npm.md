
# 🛠 Setting Up Node.js and npm for React Development

## 📥 Installation Guide

### 1. **Download Node.js**
   - Visit [Node.js official website](https://nodejs.org)
   - Choose version:
     - **LTS (Recommended)**: Stable version for production
     - **Current**: Latest features (may be less stable)

### 2. **Run the Installer**
   - Windows/macOS: Run downloaded installer
   - Linux: Use package manager (e.g., `sudo apt install nodejs npm`)
   - ✔ Check "npm package manager" during installation

## ✅ Verification
```bash
node -v  # Should display version (e.g., v18.x.x)
npm -v   # Should display version (e.g., 9.x.x)
```

## ⚙️ Advanced Setup (Optional)

### 1. **Version Management**
   - Windows: [nvm-windows](https://github.com/coreybutler/nvm-windows)
   ```bash
   nvm install 18.17.1  # Install specific version
   nvm use 18.17.1      # Switch versions
   ```
   - macOS/Linux: [nvm](https://github.com/nvm-sh/nvm)
   ```bash
   nvm install --lts
   ```

### 2. **Update npm**
```bash
npm install -g npm@latest
```

## 🏗️ Project Setup
```bash
mkdir react-project
cd react-project
npm init -y            # Creates package.json
```

## 🚀 Next Steps
- Install React:
```bash
npx create-react-app my-app
```
- Start developing!

---

> 💡 **Tip**: Always use Node.js LTS for production projects for better stabilite
