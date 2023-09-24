import React, { useEffect, useState } from 'react'
import ListViewItem from '../listViewItem/ListViewItem';
import TODO_API from '../../utilities/todos/todo.api';

const ListView = ({ className }) => {

    const [data, setData] = useState([]);

    const API_BASE_URL = 'http://localhost:8000/api/v1/todo/items';

    const todoApi = axios.create({
        baseURL: API_BASE_URL,
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const getAllTodos = async () => {
        try {
            const response = await todoApi.get('/');
            setData(response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching todos:', error);
            throw error;
        }
    }

    useEffect(() => {
        getAllTodos();
    }, [])

    return (
        <div className={`h-4/5 overflow-auto ${className}`}>
            {data.map((item) => (
                <div key={item.id + "item"} className='flex justify-between'>
                    <ListViewItem item={item} />
                </div>
            ))}</div>
    )
}

export default ListView;