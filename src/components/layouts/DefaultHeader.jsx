import ContentWrapper from "./ContentWrapper";

const DefaultHeader = () => {

  return (
    <div className={'w-full h-16 bg-color-title-text border-b-[1.5px]'}>
      <ContentWrapper>
        <div className='w-full h-full py-1 px-10 pl-5'>
          <h1 className="text-heading-3 leading-10 text-color-secondary-s80">
            Starter Project: React
          </h1>
          <p className="text-color-secondary-s70 text-sm mb-4">
            Welcome to our React Project
          </p>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default DefaultHeader;
