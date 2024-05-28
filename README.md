# Task Management Application

This is a simple Node.js application using Express and EJS for task management. It allows you to create, read, and edit tasks stored as files.

## Prerequisites

- Node.js installed
- npm (Node package manager) installed

## Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory.
3. Install the required packages:

    ```bash
    npm install express ejs
    ```

## Project Structure

project/
│
├── views/
│ ├── edit.ejs
│ ├── index.ejs
│ └── show.ejs
├── files/ # This is where task files will be stored
├── public/ # Static files (if any)
├── index.js # Main server file
├── package.json
└── package-lock.json


## Running the Application

1. Start the server:

    ```bash
    node index.js
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Routes

### GET /

Displays the homepage with a form to create a new task and a list of existing tasks.

### POST /create

Creates a new task. The task title and details are submitted via the form and stored as a file in the `./files` directory.

### GET /files/:filename

Displays the details of a specific task.

### GET /edit/:filename

Displays the edit form for a specific task, pre-filled with the current title and details.

### POST /edit

Updates an existing task with the new details provided.
