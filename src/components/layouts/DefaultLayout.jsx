import { cloneElement, useRef } from 'react';
import DefaultFooter from './DefaultFooter';
import DefaultHeader from './DefaultHeader';
import ContentWrapper from './ContentWrapper';

const DefaultLayout = ({ children, showFooter }) => {
  console.log('showFooter', showFooter)
  const headerref = useRef();
  return (
    <div className="h-screen overflow-clip">
      <div ref={headerref}>
        <DefaultHeader />
      </div>
      <ContentWrapper>
        <div className="bg-white py-5 h-full ">
          {cloneElement(children, { headerref })}
        </div>
      </ContentWrapper>
      {showFooter && <DefaultFooter />}
    </div>
  );
};

export default DefaultLayout;
