import React, { useEffect, useState } from 'react'
import ListViewItem from '../listViewItem/ListViewItem';
import TODO_API from '../../utilities/todos/todo.api';

const ListView = ({ className }) => {
    // states
    const [data, setData] = useState([]);

    // functions
    const fetchTodos = async () => {
        try {
            const response = await TODO_API.getAllTodos();
            setData(response.data);
            console.log('response.data', response.data)
            return response.data;
        } catch (error) {
            console.error('Error fetching todos:', error);
            throw error;
        }
    }

    // listeners
    useEffect(() => {
        fetchTodos();
    }, [])

    return (
        <div className={`h-4/5 overflow-auto ${className}`}>
            {data.map((item) => (
                <div key={item.id + "item"} className='flex justify-between'>
                    <ListViewItem item={item} className={'cursor-pointer'} />
                </div>
            ))}
        </div>
    )
}

export default ListView;