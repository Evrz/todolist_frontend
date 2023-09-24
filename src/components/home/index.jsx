import ListView from '../Listview/ListView';
import DefaultLayout from '../layouts/DefaultLayout';

const Home = () => {

  return (
    <DefaultLayout showFooter={true}>
      <div className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-opacity-30 p-4'>
        <ListView/>
      </div>
    </DefaultLayout>
  );
};

export default Home;
