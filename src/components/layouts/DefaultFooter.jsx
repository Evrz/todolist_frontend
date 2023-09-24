import ContentWrapper from './ContentWrapper';

const DefaultFooter = () => {
  return (
    <footer className='w-full bg-red-300 px-5 py-3 shadow-[0_2px_10px_0px_rgba(0,0,0,0.4)]'>
      <ContentWrapper>
        <div className='text-xs text-[#424242]'> Evrz &#x2022; Todo List Project &#x2022; Reactjs </div>
      </ContentWrapper>
    </footer>
  );
};

export default DefaultFooter;