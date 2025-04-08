import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete }) => (
    <ul>
        {tasks.map((task) => (
            <li key={task._id}>
                <strong>{task.title}</strong> - {task.description} ({task.status})
                <button onClick={() => onEdit(task)}>Edit</button>
                <button onClick={() => onDelete(task._id)}>Delete</button>
            </li>
        ))}
    </ul>
);

export default TaskList;
