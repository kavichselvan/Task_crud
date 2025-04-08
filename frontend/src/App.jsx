import React, { useEffect, useState } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from './api';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);

    const loadTasks = async () => {
        const res = await fetchTasks();
        setTasks(res.data);
    };

    useEffect(() => {
        loadTasks();
    }, []);

    const handleAddOrUpdate = async (task) => {
        if (task._id) {
            await updateTask(task._id, task);
        } else {
            await createTask(task);
        }
        loadTasks();
    };

    const handleDelete = async (id) => {
        await deleteTask(id);
        loadTasks();
    };

    const handleEdit = (task) => {
        setSelectedTask(task);
    };

    const clearTask = () => setSelectedTask(null);

    return (
        <div>
            <h1>Task Manager</h1>
            <TaskForm onSubmit={handleAddOrUpdate} selectedTask={selectedTask} clearTask={clearTask} />
            <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
}

export default App;
