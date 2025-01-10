# GitHub User Data API Backend

This is the backend for the **GitHub User Data API**. It provides functionality to save, update, delete, and retrieve GitHub user data from MongoDB. Additionally, it includes features to find mutual followers and search for users.

## Features

- Fetch GitHub user data and save it to a database.
- Retrieve saved user data.
- Soft delete and restore users.
- Search users by username.
- Find mutual followers between users.
- Sort users by their `created_at` date or any custom field.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Axios
- GitHub API

## Deployed Link

You can access the deployed API at:  
[https://autonomizebackend.onrender.com](https://autonomizebackend.onrender.com)

The backend will be running at `http://localhost:5000`.

---

## API Endpoints

### `POST /save-user/:username`

Fetches data from GitHub for the specified username and saves it to the database. If the user already exists, it checks if they have been deleted, and restores them if necessary.

- **Parameters**:
  - `username` (required): GitHub username.

- **Response**:
  - **Success**: Returns saved user data.
  - **Error**: Returns error message.

---

### `GET /mutual-friends/:username`

Finds the mutual followers between the given GitHub user and their followers.

- **Parameters**:
  - `username` (required): GitHub username.

- **Response**:
  - **Success**: Returns a list of mutual followers.
  - **Error**: Returns error message.

---

### `GET /search-users`

Search for users in the database, with optional filtering by username.

- **Query Parameters**:
  - `username` (optional): Filter by username.

- **Response**:
  - **Success**: Returns a list of users.
  - **Error**: Returns error message.

---

### `DELETE /delete-user/:username`

Soft deletes a user by marking them as deleted in the database.

- **Parameters**:
  - `username` (required): GitHub username.

- **Response**:
  - **Success**: Returns a message indicating the user has been deleted.
  - **Error**: Returns error message.

---

### `PATCH /update-user/:username`

Updates a user's data based on the provided information.

- **Parameters**:
  - `username` (required): GitHub username.
  - **Request Body**: The updated data for the user.

- **Response**:
  - **Success**: Returns updated user data.
  - **Error**: Returns error message.

---

### `GET /users`

Returns a list of users sorted by a specified field.

- **Query Parameters**:
  - `sortBy` (optional): The field to sort by (default: `created_at`).

- **Response**:
  - **Success**: Returns a sorted list of users.
  - **Error**: Returns error message.

