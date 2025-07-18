import React from 'react';
import {Link} from 'react-router-dom';

const TaskTable = ({tasks, onDelete}) => (
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Due Date</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {tasks.map((task) => (
                <tr key={task.id}>
                    <td><Link to={`/${task.id}`}>{task.title}</Link></td>
                    <td style={{ wordWrap: 'break-word'}}>{task.description}</td>
                    <td>{task.status}</td>
                    <td>{task.dueDate}</td>
                    <td>
                        <Link to={`/edit/${task.id}`}>Edit</Link>
                        <button onClick={() => onDelete(task.id)}> Delete</button>                        
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
)

export default TaskTable;