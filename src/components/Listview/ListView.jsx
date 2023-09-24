import React, { useEffect, useState } from 'react'
import ListViewItem from '../listviewitem/ListViewItem';
import axios from 'axios';


 const ListView = ({ className }) => {
    
  const [data, setData] = useState([]);

  useEffect(() => {
      axios.get('/api/v1/todo/items')
          .then(response => {
              setData(response.data);
          })
          .catch(error => {
              console.error(error);
          });
  }, [])

    return (

        <div className={`h-4/5 overflow-auto ${className}`}>
            {data.map((item) => (
                <div className='flex justify-between'>
                   <ListViewItem item= {item}/>
                </div>
            ))}</div>
    )
}

export default ListView;