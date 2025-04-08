const Task = require('../models/Task');

// Create
exports.createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Read All
exports.getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
};

// Update
exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedTask);
};

// Delete
exports.deleteTask = async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.json({ message: 'Task deleted' });
};
