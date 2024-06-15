import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const HomePage = () => {
    const [tasks, setTasks] = useState([]);

    const handleSaveTask = (task) => {
        setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
    };

    const handleDeleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <TaskForm onSave={handleSaveTask} />
            <TaskList tasks={tasks} onDelete={handleDeleteTask} />
        </div>
    );
};

export default HomePage;
