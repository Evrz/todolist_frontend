import React, { useEffect, useState } from 'react'
import ListViewItem from '../Listviewitem/ListViewItem';
import axios from 'axios';


 const ListView = () => {


    
  const [data, setData] = useState([]);

  useEffect(() => {
      axios.get('/api/v1/todo/items')
          .then(response => {
              setData(response.data);
          })
          .catch(error => {
              console.error(error);
          });
  }, []);
console.log(data,"asdjadsadljea")
    //mimic the API data with dummy data
    let ListItems =data
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