# Task Management Application
This project is a Task Management Application developed with role-based access control (RBAC). It allows Admin and User roles with different permissions to manage tasks effectively. Admin can create, delete, and access all tasks, while Users can only view and update the status of their own tasks. This application uses React.js for the frontend, Node.js & Express.js for the backend, and MongoDB for the database.

## Features
User Authentication: Users can register and log in using JWT-based authentication.
Role-Based Access Control: Different permissions for Admin and User roles.

## Task Management:
* Admin: Can create, delete, and view all tasks.
* User: Can view and update the status of only their tasks.
  
## Task Status: Tasks can have statuses such as "Pending", "In Progress", and "Completed".
* Frontend: Built with React.js and styled using MUI.
* Backend: Built with Node.js and Express.js, implementing role-based access control.
* Database: MongoDB for task and user storage.
  
## Technologies Used
* Frontend: React.js, MUI
* Backend: Node.js, Express.js
* Database: MongoDB
* Authentication: JWT (JSON Web Tokens)
  
## API Testing: Postman

## Deployment: Vercel

## Deployment Links
Frontend: https://task-management-application-eobe.vercel.app/
Backend: https://task-management-application-orpin.vercel.app

## API Documentation
All APIs are documented using Postman. You can test the API using the link below:

* Postman API Documentation
  
1. For Admin
* https://task-management-application-orpin.vercel.app/tasks/create - Create Tasks
* https://task-management-application-orpin.vercel.app/auth/register - Signup
* https://task-management-application-orpin.vercel.app/auth/login  -  Signin
* https://task-management-application-orpin.vercel.app/tasks  - Get Tasks
* http://localhost:8000/tasks/67968c4110c3a7888993c6d4  - Delete Tasks

2. For User
* https://task-management-application-orpin.vercel.app/auth/register - Signup
* https://task-management-application-orpin.vercel.app/auth/login - Signin
* https://task-management-application-orpin.vercel.app/auth/users - Get All Users
* https://task-management-application-orpin.vercel.app/tasks/user -  Get Own Tasks
* https://task-management-application-orpin.vercel.app/tasks/6798146584ea2180db7dcdbe - Update Own Tasks
   
* Backend API Endpoints
  
1. Authentication
* POST /auth/register: Register a new user.
* POST /auth/login: Login with JWT-based authentication.
  
2. Admin Routes
* GET /tasks: View all tasks.
* POST /tasks: Create a new task.
* DELETE /tasks/:id: Delete any task.
  
3. User Routes
* GET /tasks: View only assigned tasks.
* PUT /tasks/:id: Update the status of the user's own task.
  
## Project Setup

1. Clone repository: 
https://github.com/Summi51/Task-Management-Application.git
Install dependencies:

2. Frontend Setup
cd task-management-app-frontend
npm install
Run the development server:
npm start

3. Backend Setup
cd task-management-app-backend
npm install
Set up environment variables (MongoDB URI, JWT Secret).
Run the server:
npm start
