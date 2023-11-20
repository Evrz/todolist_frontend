
const SideBar = ({ bgColor, children, className }) => {
  return (
    <div className={
      `text-heading-8 w-[75%] p-2 rounded-md ${bgColor ?? 'bg-slate-100'} ${className}`
    }>
      {children}
    </div>
  )
}

export default SideBar

