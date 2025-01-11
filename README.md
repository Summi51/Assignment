# GitHub Application

This project is a full-stack web application that allows users to fetch GitHub user data, store it in a database, and perform various operations such as viewing repositories, followers, and repository details. It consists of a **backend** and a **frontend** with clearly defined APIs and UI requirements.

---

## **Backend**

### **Tech Stack**
- **Node.js**
- **Express.js**
- **React.js**
- **MongoDb Database**

### **Setup Instructions**
1. Clone the repository:
   ```bash
   git clone https://github.com/Summi51/Assignment
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the database:
   - Set up a MongoDb database.
   - Create a `.env` file in the root directory and define the following variables:
     ```env
     
4. Start the server:
   ```bash
   npm start
   ```

### **API Endpoints**

#### 1. **Save GitHub User Details**
   - **Method**: `POST`
   - **URL**: `/api/users`
   - **Description**: Accepts a GitHub username, fetches the user data from GitHub API, and saves it to the database.

#### 2. **Find Mutual Friends**
   - **Method**: `POST`
   - **URL**: `/api/users/:username/friends`
   - **Description**: Finds users mutually following each other and saves them as friends.

#### 3. **Search User Data**
   - **Method**: `GET`
   - **URL**: `/api/users/search`
   - **Description**: Search users in the database based on username, location, etc.

#### 4. **Delete User**
   - **Method**: `DELETE`
   - **URL**: `/api/users/:username`
   - **Description**: Soft deletes a user based on username.

#### 5. **Update User Details**
   - **Method**: `PATCH`
   - **URL**: `/api/users/:username`
   - **Description**: Updates fields like `location`, `blog`, or `bio` for a user.

#### 6. **Get Sorted Users**
   - **Method**: `GET`
   - **URL**: `/api/users/sorted`
   - **Description**: Returns all users from the database sorted by given fields such as `public_repos`, `followers`, etc.

---

## **Frontend**

### **Tech Stack**
- **React.js** (with hooks)

### **Setup Instructions**
1. Navigate to the frontend directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

### **Pages and Features**

#### 1. **Initial Page**
   - Input box for GitHub username.
   - Submit button to fetch data.
   - Displays a list of repositories for the given username.

#### 2. **Repository Details Page**
   - Shows detailed information about the selected repository.

#### 3. **Followers Page**
   - Displays followers of the user.
   - Clicking on a follower redirects to their repository list page.

#### 4. **Navigation**
   - A back button to return to the previous page.
   - No browser history management; all pages are rendered on the same URL.

### **Key Considerations**
- **Caching**:
  - Do not call the GitHub API multiple times for the same data.
  - Store fetched data in state or local storage to avoid redundant API calls.

- **Styling**:
  - Follow the provided reference images for layout.
  - No CSS frameworks; use plain CSS.

---

## **How to Run the Application**
1. Ensure the backend server is running on a specified port.
2. Start the frontend server.
3. Access the application on `http://localhost:3001` 

---

## **Folder Structure**

### **Backend**
```plaintext
backend/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│--- index.js
|--- db.js
├── .env
├── package.json
├── tsconfig.json
```

### **Frontend**
```plaintext
frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── utils
├── public/
├── package.json
```
