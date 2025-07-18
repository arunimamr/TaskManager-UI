import React from 'react';
import TaskForm from '../components/TaskForm';
import { createTask } from '../services/taskService';
import { useNavigate } from 'react-router-dom';

const CreateTask = () => {
    const navigate = useNavigate();

    const handleCreate = async(task) => {
        await createTask(task);
        navigate('/');
    };

    return(
        <div>
            <h2>Create Task</h2>
            <TaskForm onSubmit={handleCreate} />
        </div>
    );
}

export default CreateTask;