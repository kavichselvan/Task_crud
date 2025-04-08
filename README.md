# 📝 Task Manager App

A simple and elegant Task Manager built with **React (Vite)** for the frontend and **Node.js + Express + MongoDB** for the backend. This app allows users to create, view, and delete tasks with a clean and responsive UI.

## 🚀 Features

- Create tasks with a title and description
- View all tasks in a beautiful card layout
- Delete tasks instantly
- Responsive design (mobile-friendly)
- Built with modern tools and technologies

## 🛠️ Tech Stack

### Frontend
- Vite
- React
- CSS (Custom, no frameworks)
- Axios (for API calls)

### Backend
- Node.js
- Express.js
- MongoDB (via Mongoose)
- CORS and Body-Parser

## 📁 Folder Structure

mern-crud-app/ │ ├── backend/ │ ├── models/ │ ├── routes/ │ ├── controllers/ │ ├── .env │ └── server.js │ ├── frontend/ │ ├── public/ │ ├── src/ │ │ ├── components/ │ │ ├── App.jsx │ │ ├── main.jsx │ │ └── assets/css/styles.css │ └── vite.config.js │ └── README.md

bash
Copy
Edit

## 🖥️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/mern-crud-app.git
cd mern-crud-app
2. Start Backend Server
bash
Copy
Edit
cd backend
npm install
Create a .env file and add:

ini
Copy
Edit
PORT=5000
MONGODB_URI=mongodb://localhost:27017/taskmanager
Then run:

bash
Copy
Edit
npm start
3. Start Frontend (Vite)
bash
Copy
Edit
cd frontend
npm install
npm run dev
Open your browser: http://localhost:5173

🔧 API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
POST	/api/tasks	Create a new task
DELETE	/api/tasks/:id	Delete a specific task
📷 Screenshots
Add some screenshots of your app here for better visual impact.

🧠 Future Improvements
Task editing functionality

User authentication (login/signup)

Due dates and reminders

Mark tasks as completed

🧑‍💻 Author
Made with ❤️ by Kavichselvan










