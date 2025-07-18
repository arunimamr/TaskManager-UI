import axios from 'axios';

const BASE_URL = 'http://localhost:8080/tasks';

    export const getAllTasks = (taskStatus="", pageNum=1, pageSize=5) => {
        let url = `${BASE_URL}/all?pageNum=${pageNum}&pageSize=${pageSize}`;
        if(taskStatus) 
            url = url + `&status=${taskStatus}`;
            return axios.get(url);
    }    
  
    export const getTaskById = (id) => {
        return axios.get(`${BASE_URL}/${id}`);
    }


    export const createTask = (task) => {
        return axios.post(`${BASE_URL}/save`, task);
    }


    export const updateTask = (id, task) => {
        return axios.put(`${BASE_URL}/${id}`, task)
    }

    export const deleteTask= (id) => {
        console.log("delete id :  " + id)
        axios.delete(`${BASE_URL}/${id}`);
    }
