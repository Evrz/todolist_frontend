import ContentWrapper from "./ContentWrapper";

const DefaultHeader = () => {

  return (
    <div className={'w-full h-16 bg-color-title-text border-b-[1.5px]'}>
      <ContentWrapper>
        <div className='w-full py-1 px-10 pl-5 items-center'>
          <h1 className="text-heading-3 text-color-secondary-s80">
            TODO LIST: React
          </h1>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default DefaultHeader;
