import ContentWrapper from './ContentWrapper';

const DefaultFooter = () => {
  return (
    <footer className='w-full bg-red-300 px-5 py-3 shadow-[0_2px_10px_0px_rgba(0,0,0,0.4)]'>
      <ContentWrapper>
        <div className='text-xs text-[#888]'> Evrz &#x2022; Starter Project &#x2022; Reactjs Tailwind </div>
      </ContentWrapper>
    </footer>
  );
};

export default DefaultFooter;