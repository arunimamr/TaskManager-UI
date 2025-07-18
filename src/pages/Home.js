import React, { useEffect, useState } from 'react';
import { getAllTasks, deleteTask } from '../services/taskService';
import TaskTable from '../components/TaskTable';
import { Link } from 'react-router-dom';

 export const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [status, setStatus] = useState('');
    const [pageNum, setPageNum] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [totalPages, setTotalPages] = useState(0);    
    

    useEffect(() => {
        const loadTasks = async () => {
            console.log("loading tasks...")
            try{                
                const response = await getAllTasks(status, pageNum, pageSize);
                setTasks(response.data.content || []);                
                setTotalPages(response.data.totalPages || 0);
            }
            catch(error){
                console.log("Error while loading tasks " +  error)
            }
    };
    loadTasks();
    }, [status, pageNum, pageSize]);

    const handleDelete = async (id) => {
         deleteTask(id);
        const loadTasks = async () => {
        const response = await getAllTasks(status, pageNum, pageSize);
        setTasks(response.data.content || []);
        setTotalPages(response.data.totalPages || 0);
    };
        loadTasks();
    };

    return(
        <div className='container-main-home'>
            <h2>Task List</h2>
            <div>
                <label>Filter by Status : </label>
                <select onChange={(e) => setStatus(e.target.value)} value={status}>
                    <option value="">ALL</option>
                    <option value="TO_DO">TODO</option>
                    <option value="IN_PROGRESS">IN PROGRESS</option>    
                    <option value="DONE"> DONE</option>
                </select>
            </div>

            <TaskTable tasks={tasks} onDelete={handleDelete}/>

            <div>
                <button onClick={() => setPageNum((p) => Math.max(p-1, 0))} disabled={pageNum === 0}>Prev</button>
                <button onClick={() => setPageNum((p) => Math.min(p+1, totalPages-1))} disabled={pageNum >= totalPages-1}>Next</button>
                <select onChange={(e) => {
                    const selected = parseInt(e.target.value, 10)
                    setPageSize(selected)}} >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                </select>
            </div>
            <Link to="/save">+ Add New Task</Link>
        </div>
    );   
}

