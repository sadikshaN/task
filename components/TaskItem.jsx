import React from 'react';
import { Link } from 'react-router-dom';

const TaskItem = ({ task, onDelete }) => {
    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <small>Created at: {new Date(task.createdAt).toLocaleString()}</small>
            <div>
                <Link to={`/task/${task.id}`}>View Details</Link>
                <button onClick={() => onDelete(task.id)}>Delete</button>
            </div>
        </div>
    );
};

export default TaskItem;
