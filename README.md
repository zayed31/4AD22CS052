# 📊 Stock Visualizer - Full Stack Web App

A simple full-stack web application that allows users to view and analyze stock data using an interactive dashboard.

---

## 🧠 Project Overview

This project is designed to demonstrate how a frontend (React.js) and backend (Spring Boot) can operate cohesively to construct a modern, responsive stock data dashboard.

- **Frontend**: Implemented using React, TailwindCSS, and Recharts for rendering stock listings and visual graphs.
- **Backend**: Built using Spring Boot, which exposes RESTful APIs to retrieve stock details and historical data.

---

## 📁 Project Structure

```
├── question1-backend/        # Spring Boot backend project
└── question-2-frontend/      # React.js frontend project
```

---

## 🚀 Features

- 📃 View a list of all available stocks  
- 📈 Visualize stock history using line charts (Recharts)  
- 🔄 Interactive dashboard with dynamic data fetching  
- 🎨 Responsive and modern UI powered by Tailwind CSS

---

## ⚙️ Setup Instructions

### ✅ Prerequisites

Ensure the following dependencies are installed:

- Node.js (v14 or later)
- Java 17 or later (for Spring Boot)
- MySQL (or modify the DB configuration accordingly)

---

#### ▶️ Run the Backend

Execute the following in your terminal or through an IDE (e.g., IntelliJ, VS Code):

```bash
./mvnw spring-boot:run
```

Backend available at: `http://localhost:5000`

---

### 🌐 Frontend Setup (React)

```bash
cd ../question-2-frontend
npm install
```

#### ▶️ Start the Frontend

```bash
npm start
```

Frontend available at: `http://localhost:3000`

---

## 📷 Screenshots

- **Dashboard View - Amazon Stock Price**  
  ![Dashboard View](https://drive.google.com/uc?export=view&id=1MjUc3GreRuk1oQWimPjLU5jitZg-y-Tt)

- **Fetching Amazon Stock Price**  
  ![Amazon Stock](https://drive.google.com/uc?export=view&id=1hhVtREh1lrxnhH0ePT1fFQOtq3h-vAtX)

- **HeatMap Display**  
  ![HeatMap](https://drive.google.com/uc?export=view&id=1LrLCogIwem5UyivH0j-7UomB8AUzte8z)

- **Backend API Response - Stock Price Fetching**  
  ![Backend Fetch](https://drive.google.com/uc?export=view&id=1d0SM_WflysPNzMWizVn142uawbItaELe)

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS, Recharts  
- **Backend**: Spring Boot, Java  
- **Database**: MySQL

---
