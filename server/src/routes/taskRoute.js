// routes/taskRoutes.js

const express = require('express');
const app = express.Router();
const { getAllTasks, getIncompleteTasks, getCompletedTasks, createTask, updateTask, deleteTask } = require("../controller/taskCtrl");
const authMiddleware = require('../middlewares/authMiddleware');
const findCategoryById = require('../middlewares/findCategory');


// Route to get all tasks for a specific user
app.get('/', authMiddleware, getAllTasks);

// Route to get tasks where completed is false for a specific user
app.get('/incomplete', authMiddleware, getIncompleteTasks);

// Route to get tasks where completed is true for a specific user
app.get('/completed', authMiddleware, getCompletedTasks);

// Route to create a new task for a specific user
app.post('/post', authMiddleware, findCategoryById, createTask);

// Route to update a task for a specific user
app.put('/tasks/:taskId', authMiddleware, updateTask);

// Route to mark a task as completed for a specific user
app.patch('/tasks/:taskId', authMiddleware, updateTask);

// Route to delete a task for a specific user
app.delete('/tasks/:taskId', authMiddleware, deleteTask);

module.exports = app;
