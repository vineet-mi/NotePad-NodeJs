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

## Views

### edit.ejs

Form to edit an existing task. The form is pre-filled with the current task details.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Task</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div class="main w-full min-h-screen bg-zinc-900 p-5">
        <a href="/" class="text-red-600"><- Go Back to Homepage</a>
        <form action="/edit" method="post">
            <input type="text" placeholder="Title Goes here"
                class="text-zinc-600 block w-full rounded-md outline-none px-5 py-2 bg-zinc-800" name="title" value="<%= title %>">
            <textarea placeholder="Details Goes Here!"
                class="text-white block w-full mt-2 rounded-md outline-none resize-none px-5 py-2 bg-zinc-800" name="details"><%= details %></textarea>
            <input type="submit" class="mt-2 bg-blue-600 rounded-md px-5 py-2" value="Edit Task">
        </form>
    </div>
</body>
</html>
