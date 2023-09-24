import React from 'react'
import ListViewItem from '../Listviewitem/ListViewItem';

 const ListView = () => {
    //mimic the API data woth dummy data
    let ListItems =[{item:"jkshjkhdhksd"},{item:"jkshjkhdhksd"},{item:"jkshjkhdhksd"},{item:"jkshjkhdhksd"},{item:"jkshjkhdhksd"},{item:"jkshjkhdhksd"},{item:"jkshjkhdhksd"},{item:"jkshjkhdhksd"},{item:"jkshjkhdhksd"},{item:"jkshjkhdhksd"},{item:"jkshjkhdhksd"},{item:"jkshjkhdhksd"}]
    return (

        <div className='h-80 overflow-auto'>
            {ListItems.map((item) => (
                <div className='flex justify-between'>
                   <ListViewItem item= {item}/>
                </div>
            ))}</div>
    )
}

export default ListView;