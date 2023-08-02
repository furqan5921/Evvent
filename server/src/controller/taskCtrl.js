// controllers/taskController.js

const Task = require('../models/taskModel');

// Controller to get all tasks for a specific user
const getAllTasks = async (req, res) => {

    try {
        const userId = req.user.id; // This assumes that the user ID is stored in the req.user object after the authentication middleware
        const tasks = await Task.find({ user: userId }).populate('category').populate("user");
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
};

// Controller to get tasks where completed is false for a specific user
const getIncompleteTasks = async (req, res) => {
    try {
        const userId = req.user.id;
        const incompleteTasks = await Task.find({ user: userId, completed: false }).populate('category').populate("user");
        res.json(incompleteTasks);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch incomplete tasks' });
    }
};

// Controller to get tasks where completed is true for a specific user
const getCompletedTasks = async (req, res) => {
    try {
        const userId = req.user.id;
        console.log(userId);
        const completedTasks = await Task.find({ user: userId, completed: true }).populate('category').populate("user");
        res.json(completedTasks);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch completed tasks' });
    }
};

// Controller to create a new task for a specific user
const createTask = async (req, res) => {
    try {
        console.log(req.category)
        const userId = req.user.id;
        const categoryId = req.category._id;
        const { title, description } = req.body;

        const newTask = await Task.create({
            title,
            description,
            category: categoryId,
            user: userId,
        });

        res.json(newTask);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create task' });
    }
};

// Controller to update a task for a specific user
const updateTask = async (req, res) => {
    try {
        const taskId = req.params.taskId;
        const userId = req.user.id;
        const { title, description, completed, category } = req.body;

        const updatedTask = await Task.findByIdAndUpdate(taskId, req.body);

        if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found or unauthorized' });
        }

        res.json(updatedTask);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update task' });
    }
};


// Controller to delete a task for a specific user
const deleteTask = async (req, res) => {
    try {
        const taskId = req.params.taskId;
        const userId = req.user.id;

        const deletedTask = await Task.findOneAndDelete({ _id: taskId, user: userId });

        if (!deletedTask) {
            return res.status(404).json({ error: 'Task not found or unauthorized' });
        }

        res.json(deletedTask);
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete task' });
    }
};


module.exports = { getAllTasks, getCompletedTasks, getIncompleteTasks, updateTask, createTask, deleteTask }
