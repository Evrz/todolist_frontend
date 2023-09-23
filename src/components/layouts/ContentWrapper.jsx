
const ContentWrapper = ({ children, className }) => {
  return (
    <div className={`w-full max-w-limit h-screen m-auto ${className}`}>
      {children}
    </div>
  );
};

export default ContentWrapper;