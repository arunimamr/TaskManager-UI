import React, { useState, useEffect } from 'react';
import { getTaskById, updateTask } from '../services/taskService';
import TaskForm from '../components/TaskForm';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateTask = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const[taskData, setTaskData] = useState({
        title : '',
        description : ''
    });

    useEffect(() => {
        getTaskById(id).then(setTaskData);
    }, [id]);

        const handleUpdate = async(task) =>{
            await updateTask(id, task);            
            navigate('/')
        };

    return(
        <div>
            <h2>Edit Task</h2>
            {taskData && <TaskForm onSubmit={handleUpdate} initialData={taskData} />}
        </div>
    );
}

export default UpdateTask;