import axios from "axios";
import URLS from "../urls";

const TODOAPI = (METHOD) => {

    const todoApi = axios.create({
        baseURL: URLS.TODO[METHOD](),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return todoApi;
}

const getAllTodos = async () => {
    try {
        const response = await TODOAPI(`READ_MANY`).get('/');
        return response;
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
};


const createTodo = async (todoData) => {
    try {
        const response = await TODOAPI('CREATE').post('/', todoData);
        return response;
    } catch (error) {
        console.error('Error creating todo:', error);
        throw error;
    }
};

const updateTodo = async (todoId, updatedTodoData) => {
    try {
        const response = await TODOAPI('UPDATE').put(`/${todoId}`, updatedTodoData);
        return response;
    } catch (error) {
        console.error('Error updating todo:', error);
        throw error;
    }
};

const deleteTodo = async (todoId) => {
    try {
        const response = await TODOAPI('DELETE').delete(`/${todoId}`);
        return response;
    } catch (error) {
        console.error('Error deleting todo:', error);
        throw error;
    }
};

const TODO_API = {
    getAllTodos,
    createTodo,
    updateTodo,
    deleteTodo,
};

export default TODO_API;