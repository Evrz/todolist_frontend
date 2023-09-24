import SideBar from '../common/SideBar';
import DefaultLayout from '../layouts/DefaultLayout';
import ListView from '../listview/ListView'
const Home = () => {

  return (
    <DefaultLayout>
      <div className='flex h-full test justify-evenly'>
        <div className='w-[10%] flex justify-around m-4 '>
          <SideBar />
        </div>
        <div className='w-[90%] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-opacity-30 m-4 rounded-md'>
          <div className='px-7 py-3 text-heading-4'> Todos</div>
          <ListView className={'px-4'} />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Home;
