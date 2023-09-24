
const TitleBar = ({ title, children }) => {
  return (
    <div className='flex px-7 py-3 text-heading-4 justify-between'>
      <div className=''>{title}</div>
      <div>{children}</div>
    </div>
  )
}

export default TitleBar