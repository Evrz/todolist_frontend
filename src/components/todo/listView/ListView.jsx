import TODO_API from '../../../utilities/todos/todo.api';
import { FUNCTIONS } from '../../home';
import ListViewItem from '../listViewItem/ListViewItem';

const ListView = ({ className, data, onDeleteSuccess  }) => {
    // fn: delete-Todo 
    const deleteTodos = async (id) => {
        try {
            const response = await TODO_API.deleteTodo(id);
            onDeleteSuccess();
            return response.data;
        } catch (error) {
            console.error('Error creating todos:', error);
            throw error;
        }
    }

    return (
        <div className={`h-4/5 overflow-auto ${className}`}>
            {data.map((item) => (
                <div key={item.id + "item"} className='flex justify-between'>
                    <ListViewItem item={item} className={'cursor-pointer'} onDelete={() => deleteTodos(item.id)} />
                </div>
            ))}
        </div>
    )
}

export default ListView;