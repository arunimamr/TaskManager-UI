import React, {useState, useEffect} from 'react';

const TaskForm = ({ onSubmit, initialData}) => {
    const [task, setTask] = useState({
        title: '',
        description: '',
        status: 'TO_DO',
        dueDate: ''
    });

    useEffect(()=> {
        if(initialData)
            setTask(initialData);},
        [initialData]);
    
        const handleChange = (e) => {
            setTask({...task,
                [e.target.name] : e.target.value
            });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            onSubmit(task);
        };

        return (
            <form onSubmit={handleSubmit}>
                <input name="title" value={task?.title || ''} onChange={handleChange} placeholder="Title" required/>
                <input name="description" value={task?.description || ''} onChange={handleChange} placeholder='Description' required/>
                <select name="status" value={task?.status || 'TO_DO'} onChange={handleChange}>
                    <option value="TO_DO">TODO</option>
                    <option value="IN_PROGRESS">IN PROGRESS</option>
                    <option value="DONE">DONE</option>
                </select>
                <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required/>
                <button type="submit">Save</button>
            </form>
        );
}

export default TaskForm;