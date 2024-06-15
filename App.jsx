import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TaskDetailPage from './pages/TaskDetailPage';
import './App.css';

const App = () => {
    const [tasks, setTasks] = useState([]);

    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<HomePage tasks={tasks} setTasks={setTasks} />} />
                    <Route path="/task/:id" element={<TaskDetailPage tasks={tasks} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
