# Crude Server

Crude Server is a backend project built with **Node.js**, **Express.js**, **TypeScript**, and **Prisma** to develop a RESTful API. This project supports **validation**, **logging**, and **CORS**, while using **Prisma** for database interaction.

## System Requirements
Before starting, make sure you have installed:

- **Node.js** (Recommended version: `>=18.0.0`)
- **Yarn** (Recommended instead of npm)
- **Docker** (If you want to run the database in a container)
- **MySQL** or **PostgreSQL** (If using a local database)

## Installation and Setup

### 1️⃣ **Clone the project**
```bash
git clone <repository_url>
cd crude-server
```

### 2 **Install dependencies**
```bash
yarn install
```

### 3. Configure environment variables
Create a .env file in the root directory and add the following configuration:
```env
DB_USER=db_user
DB_PASSWORD=db_password
DB_HOST=db_host
DB_PORT=db_port
DB_NAME=db_name
DATABASE_URL="mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}"
PORT=8080
NODE_ENV=development
API_BACKEND="/api/v1"
```
Note: If using PostgreSQL, modify DATABASE_URL as follows:
```env
postgresql://user:password@localhost:5432/db_name
```

### 4. Set up the database
If using Prisma, run the following commands to initialize the database:
```bash
yarn prisma migrate dev --name init
yarn prisma generate
```

### 5. Run the server
```bash
yarn run dev
```

## Project Structure
📦 crude-server
 ┣ 📂 dist
 ┣ 📂 log
 ┣ 📂 prisma
 ┣ 📂 src  
 ┃ ┣ 📂 controllers
 ┃ ┣ 📂 services
 ┃ ┣ 📂 routes
 ┃ ┣ 📂 middleware
 ┃ ┣ 📂 exception
 ┃ ┣ 📂 utils
 ┃ ┣ 📂 dto
 ┃ ┣ 📂 config
 ┃ ┣ 📂 interface
 ┃ ┣ 📂 models
 ┃ ┣ 📂 log
 ┃ ┣ 📜 index.ts
 ┣ 📜 package.json
 ┣ 📜 tsconfig.json
 ┣ 📜 .env
 ┣ 📜 README.md
 ┣ 📜 .gitignore
 ┣ 📜 yarn.lock
