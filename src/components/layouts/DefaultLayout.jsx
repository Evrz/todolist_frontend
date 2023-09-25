import DefaultHeader from './DefaultHeader';
import ContentWrapper from './ContentWrapper';

const DefaultLayout = ({ children }) => {
  return (
    <div className="h-screen overflow-clip">
      <DefaultHeader />
      <ContentWrapper className={'bg-slate-200'}>
        {children}
      </ContentWrapper>
    </div>
  );
};

export default DefaultLayout;
