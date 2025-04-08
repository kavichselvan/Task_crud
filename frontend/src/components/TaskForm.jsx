import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, selectedTask, clearTask }) => {
    const [task, setTask] = useState({ title: '', description: '', status: 'pending' });

    useEffect(() => {
        if (selectedTask) setTask(selectedTask);
    }, [selectedTask]);

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(task);
        setTask({ title: '', description: '', status: 'pending' });
        clearTask();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" value={task.title} onChange={handleChange} placeholder="Title" required />
            <input name="description" value={task.description} onChange={handleChange} placeholder="Description" />
            <select name="status" value={task.status} onChange={handleChange}>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
            </select>
            <button type="submit">{selectedTask ? 'Update' : 'Add'} Task</button>
        </form>
    );
};

export default TaskForm;
