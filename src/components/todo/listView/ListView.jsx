import React, { useEffect, useState } from 'react'
import ListViewItem from '../listViewItem/ListViewItem';
import TODO_API from '../../../utilities/todos/todo.api';

const ListView = ({ className, data }) => {

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