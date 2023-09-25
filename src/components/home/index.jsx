import TitleBar from '../common/TitleBar';
import SideBar from '../common/SideBar';
import DefaultLayout from '../layouts/DefaultLayout';
import Button from '../common/Button';
import ListView from '../todo/listView/ListView';
import { useEffect, useRef, useState } from 'react';
import Modal from '../common/Modal';
import TODO_API from '../../utilities/todos/todo.api';

const Home = () => {
  const sideBarItems = [
    {
      id: 1,
      label: "Todo",
      icon: {
        src: "/assets/icons/todoIcon.png",
        width: "10px",
        height: "10px",
        alt: "todo icon"
      },
      onClick: () => { console.log('clicked todo') }
    }
  ]
  // states
  const [isModalOpen, setModalOpen] = useState(false);
  const [todoData, setTodoData] = useState([]);
  const formRef = useRef(null);

  const handleAddTodo = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };


  // functions
  const fetchTodos = async () => {
    try {
      const response = await TODO_API.getAllTodos();
      setTodoData(response.data);
      console.log('response.data', response.data)
      return response.data;
    } catch (error) {
      console.error('Error fetching todos:', error);
      throw error;
    }
  }

  const addTodos = async (todoData) => {
    try {
      const response = await TODO_API.createTodo(todoData);
      console.log('response.data', response.data)
      handleCloseModal();
      fetchTodos();
      return response.data;
    } catch (error) {
      console.error('Error creating todos:', error);
      throw error;
    }
  }


  const handleSaveTodo = () => {
    // Implement save logic here with the form data
    const formData = new FormData(formRef.current);
    const todoData = {};
    formData.forEach((value, key) => {
      todoData[key] = value;
    });
    addTodos(todoData);
  };

  // listeners
  useEffect(() => {
    fetchTodos();
  }, [])

  return (
    <DefaultLayout>
      {isModalOpen && (
        <>
          <div className="fixed inset-0 backdrop-blur-2xl z-40"></div> {/* Add this backdrop */}
          <Modal onClose={handleCloseModal} onAdd={handleSaveTodo}>
            <form ref={formRef}>
              <label htmlFor="title">Title: </label>
              <input type="text" id="title" name="title" className='rounded-sm' /><br />
              <label htmlFor="description">Description: </label>
              <input type="text" id="description" name="description" className='rounded-sm' />
            </form>
          </Modal>
        </>

      )
      }
      <div className='flex h-full justify-evenly'>
        <div className='w-[10%] flex justify-around m-4 '>
          <SideBar className={'pt-6'} >
            {sideBarItems.map((item, index) => (
              <div key={index + "item"} className='cursor-pointer'
                onClick={item.onClick}>
                <Button
                  buttonType={'icon'}
                  data={item}
                  onClick={handleAddTodo}
                  variant="primary"
                  className={'mr-2'}
                />
              </div>))
            }
          </SideBar>
        </div>
        <div className='w-[90%] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-opacity-30 m-4 rounded-md'>
          <TitleBar title={'Your Todos'}>
            <Button
              buttonType={'button'}
              onClick={handleAddTodo}
              text="Add ToDo"
              variant="primary"
              className={'mr-2'}
            />
          </TitleBar>

          <ListView className={'px-4'} data={todoData} />
        </div>
      </div>

    </DefaultLayout>
  );
};

export default Home;
