import ListView from '../Listview/ListView';
import DefaultLayout from '../layouts/DefaultLayout';

const Home = ({ user, todos }) => {

  return (
    <DefaultLayout showFooter={true}>
      <div className='w-full h-[calc(100vh-100px)] flex justify-center items-center overflow-y-auto overflow-x-hidden '>
        <div className='text-heading-1'>Welcome {user}</div>
      </div>
    </DefaultLayout>
  );
};

export default Home;
