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

const TODO_API = {
    getAllTodos
};

export default TODO_API;