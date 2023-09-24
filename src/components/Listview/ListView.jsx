import React from 'react'
import ListViewItem from '../Listviewitem/ListViewItem';

const ListView = ({ className }) => {
    //mimic the API data with dummy data
    let listItems = [
        { item: "jkshjkhdhksd" }, { item: "jkshjkhdhksd" }, { item: "jkshjkhdhksd" }, { item: "jkshjkhdhksd" }, { item: "jkshjkhdhksd" }, { item: "jkshjkhdhksd" }, { item: "jkshjkhdhksd" }, { item: "jkshjkhdhksd" }, { item: "jkshjkhdhksd" }, { item: "jkshjkhdhksd" }, { item: "jkshjkhdhksd" }, { item: "jkshjkhdhksd" }]

    // TODO: REMOVE listItems ONCE API DATA IS LOADED

    return (
        <div className={`h-4/5 overflow-auto ${className}`}>
            {listItems.map((item) => (
                <div className='flex justify-between'>
                    <ListViewItem item={item} />
                </div>
            ))}</div>
    )
}

export default ListView;