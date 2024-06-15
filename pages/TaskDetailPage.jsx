import React from 'react';
import { useParams, Link } from 'react-router-dom';

const TaskDetailPage = ({ tasks }) => {
    const { id } = useParams();
    const task = tasks.find(task => task.id === parseInt(id));

    if (!task) {
        return <p>Task not found</p>;
    }

    return (
        <div>
            <h2>{task.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: task.description }} />
            <small>Created at: {new Date(task.createdAt).toLocaleString()}</small>
            <br />
            <Link to="/">Back to List</Link>
        </div>
    );
};

export default TaskDetailPage;
