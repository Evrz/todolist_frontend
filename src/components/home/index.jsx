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
  const formElements = [
    { label: 'Title', id: 'title', name: 'title', type: 'text' },
    { label: 'Description', id: 'description', name: 'description', type: 'textarea' },
    { label: 'Completed', id: 'completed', name: 'completed', type: 'checkbox' },
    { label: 'Due Date', id: 'due_date', name: 'due_date', type: 'date' }
  ];

  // states
  const [isModalOpen, setModalOpen] = useState(false);
  const [todoData, setTodoData] = useState([]);
  const formRef = useRef(null);

  // functions:

  // fn: modal popup and close 
  const handleAddTodo = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // fn: fetch todo
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

  // fn: create-Todo 
  const addTodos = async (todoData) => {
    try {
      const response = await TODO_API.createTodo(todoData);
      console.log('response.data', response.data)
      handleCloseModal();
      fetchTodos();
      console.log('response?.data', response?.data)
      return response.data;
    } catch (error) {
      console.error('Error creating todos:', error);
      throw error;
    }
  }


  // fn: handle Save button click on modal
  const handleSaveTodo = () => {
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
              {formElements.map((element) => (
                <div key={element.id} className='h-auto  p-2 flex justify-between'>
                  <label htmlFor={element.id} className='flex self-start'>{element.label}: </label>
                  {element.type === 'textarea' ? (
                    <div className='w-[60%]'>
                      <textarea id={element.id} name={element.name} className='rounded-sm h-auto pb-2 focus:outline-none' />
                    </div>
                  ) : (
                    <div className='w-[60%]'>
                      <input type={element.type} id={element.id} name={element.name} className='rounded-sm focus:outline-none' />
                    </div>
                  )}
                </div>
              ))}
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

          <ListView className={'px-4'} data={todoData} onDeleteSuccess={fetchTodos} />
        </div>
      </div>

    </DefaultLayout>
  );
};

export default Home;
