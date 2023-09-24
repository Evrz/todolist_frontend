import TitleBar from '../common/TitleBar';
import SideBar from '../common/SideBar';
import DefaultLayout from '../layouts/DefaultLayout';
import ListView from '../listview/ListView'
import Button from '../common/Button';
const Home = () => {
  // TODO: once Icon is finalised, replace with icon and also replace data with the respective
  const sideBarItems = [
    {
      id: 1,
      label: "Todo",
      src: "assets/icons/todo",
      onClick: () => { console.log('clicked todo') }
    },
    {
      id: 1,
      label: "Project",
      src: "assets/icons/project",
      onClick: () => { console.log('clicked projects') }
    }
  ]

  const handleAddTodo = () => {
    // Your button click logic here
  };

  return (
    <DefaultLayout>
      <div className='flex h-full test justify-evenly'>
        <div className='w-[10%] flex justify-around m-4 '>
          <SideBar >
            {sideBarItems.map((item) => (
              <div className='cursor-pointer'
                onClick={item.onClick}>{item.label}
              </div>))
            }
          </SideBar>
        </div>
        <div className='w-[90%] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-opacity-30 m-4 rounded-md'>
          <TitleBar title={'Your Todos'}>
            <Button
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
