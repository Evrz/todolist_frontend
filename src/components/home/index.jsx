import TitleBar from '../common/TitleBar';
import SideBar from '../common/SideBar';
import DefaultLayout from '../layouts/DefaultLayout';
import ListView from '../ListView/ListView'
import Button from '../common/Button';
const Home = () => {

  const handleAddTodo = () => {
    // Your button click logic here
  };
  return (
    <DefaultLayout>
      <div className='flex h-full test justify-evenly'>
        <div className='w-[10%] flex justify-around m-4 '>
          <SideBar />
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
