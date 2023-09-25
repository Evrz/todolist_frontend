const ListViewItem = ({ item, className }) => {
    return (
        <div className={`flex justify-between w-full bg-white m-4 p-3 rounded-md ${className}`}>
            <div className='rounded-full border border-gray-400 w-16 h-16 flex items-center justify-center'>
                <img src='/assets/icons/inProgress.png' alt='todo icon' className='' />
            </div>
            <span className='flex text-heading-6 items-center'>
                {item.title}
            </span>
            <div className=''>
                <span className='text-lg font-bold' >
                    {"12/08/2023"}
                </span>
                <div >
                    <span className='text-gray-500 text-opacity-50'>
                        {"10.23"}
                    </span>
                </div>
            </div>
        </div>
    )
};


export default ListViewItem;