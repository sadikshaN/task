import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete }) => {
    if (tasks.length === 0) {
        return <p>Create a task</p>;
    }

    return (
        <div>
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default TaskList;
