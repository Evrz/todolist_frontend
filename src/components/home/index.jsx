import DefaultLayout from '../layouts/DefaultLayout';
import ListView from '../ListView/ListView'
const Home = () => {

  return (
    <DefaultLayout>
      <div className='flex h-full test justify-evenly'>
        <div className='w-[15%] flex justify-around m-4 '>
          <div className='text-heading-8 w-[75%] p-5 bg-slate-500 rounded-md'>
            {/* TODO: REPLACE WITH SIDEBAR COMPONENT */}
            sidebar
          </div>
        </div>
        <div className='w-[85%] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-opacity-30 m-4 rounded-md'>
          <div className='px-7 py-3 text-heading-4'> Todos</div>
          <ListView className={'px-4'} />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Home;
