# ⚡Nexu Boilerplate

A flexible backend boilerplate built on **[Nexu](https://github.com/Kingrabashy12/nexu)**, which extends **Express.js**. It supports **TypeScript** and **JavaScript**, and provides built-in configurations for **MongoDB**, **PostgreSQL**, and **NeonDB**.

## ✨ Features

- ✅ Supports **TypeScript** & **JavaScript**
- ✅ Preconfigured for **MongoDB**, **PostgreSQL**, and **NeonDB**
- ✅ API routing, middleware, and error handling included

## 📦 Installation

1. **Run `nexujs-cli`**

   ```bash
   npx nexujs-cli init
   ```

2. On initialization, you'll see the following prompts:

   ```bash
   ◇ What is your project name?
   │  nexu-app
   ◇ Would you like to use Typescript?
   │  ● Yes (Recommended)
   │  ○ No
   ◇ Which database would you like to use?
   │  ● MongoDB
   │  ○ PostgreSQL
   │  ○ Neon
   │  ○ Others
   ◆ Would you like to initialize a git repo
   │  ● Yes (Default)
   │  ○ No
   ```

   After the prompts, `nexujs-cli` will create a new Nexu project and install the required dependencies.

## 🚀 Usage

Once the project is created, navigate to your project folder and start the server:

```bash
cd your-project-name
npm run dev
```

## 📁 Project Structure

```plaintext
nexu-boilerplate/
│── /
│   ├── controllers/        # Controller logic
│   ├── middleware/         # Custom middleware
│   ├── config/             # Database config (if using a DB)
│   ├── model/              # Database models
│   ├── routes/             # API routes
│── .env                    # Environment variables
│── .gitignore              # Git ignore file
│── nexu.config.js          # Nexu configuration
│── package.json            # Project dependencies
│── server.ts               # Main server file
│── tsconfig.json           # TypeScript config (if using TypeScript)
│── README.md               # Documentation
```
