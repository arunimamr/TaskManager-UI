import React, { useState, useEffect } from 'react';
import {getTaskById} from '../services/taskService';
import { useParams, Link } from 'react-router-dom';

const ViewTask = () => {
    const{id} = useParams(); 
    console.log("got Id from route",  id);
    const[task, setTask] = useState(null);

    useEffect(() => {    
        console.log("id -", id )    
            getTaskById(id)
            .then((response) => {
                setTask(response.data);                
                console.log("id :" , id);
            })
            .catch((error) => {                
                console.log(" Error fetching task - " + error);
            });
            
    }, [id]);

    if(!task) return <p>Task not found!</p>

    return(
        <div className='container'>
            <h3>Task Details</h3>
            <p><strong>Title</strong>{task.title}</p>
            <p><strong>Description</strong>{task.description}</p>
            <p><strong>Status</strong>{task.status}</p>
            <p><strong>Due Date</strong>{task.dueDate}</p>
            <Link to="/">Back to task List </Link>

        </div>
    );
}
 
export default ViewTask;