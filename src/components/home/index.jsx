import TitleBar from '../common/TitleBar';
import SideBar from '../common/SideBar';
import DefaultLayout from '../layouts/DefaultLayout';
import Button from '../common/Button';
import ListView from '../listView/ListView';
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

  const handleAddTodo = () => {
    // Your button click logic here
  };

  return (
    <DefaultLayout>
      <div className='flex h-full justify-evenly'>
        <div className='w-[10%] flex justify-around m-4 '>
          <SideBar className={'pt-6'} >
            {sideBarItems.map((item) => (
              <div className='cursor-pointer'
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

          <ListView className={'px-4'} />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Home;
