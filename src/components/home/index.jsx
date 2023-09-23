import { useState } from "react";

const Home = ({ user, todos }) => {
  
  return (
    <div className='w-full h-[calc(100vh-100px)] flex justify-center items-center overflow-y-auto overflow-x-hidden '>
      <div className='text-heading-1'>Welcome {user}</div>
    </div>
  );
};

export default Home;
