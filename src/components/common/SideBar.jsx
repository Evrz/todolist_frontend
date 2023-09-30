
const SideBar = ({ bgColor, children, className }) => {
  return (
    <div className={
      `text-heading-8 w-[75%] p-2 bg-slate-500 rounded-md ${bgColor ?? 'bg-slate-300'} ${className}`
    }>
      {children}
    </div>
  )
}

export default SideBar

