import Button from "../../common/Button";

const ListViewItem = ({ item, className, onDelete }) => {
    return (
        <div className={`flex justify-between w-full bg-white m-4 p-3 rounded-md ${className}`}>
            <div className='rounded-full border border-gray-400 w-16 h-16 flex items-center justify-center'>
                <img src='/assets/icons/inProgress.png' alt='todo icon' className='' />
            </div>
            <span className='flex text-heading-6 items-center'>
                {item.title}
            </span>
            <div className="flex  w-1/4">
                <div className='flex flex-1 flex-col items-center justify-center'>
                    <span className='text-lg font-bold text-red-300' >
                        {item?.due_date ? `${item?.due_date}` : 'No Deadline'}
                    </span>
                    <div >
                        <span className='text-gray-500 text-opacity-50'>
                            {item.completed ? 'completed' : 'pending'}
                        </span>
                    </div>
                </div>
                <div className='flex flex-1 w-full justify-around  '>
                    <div className='w-full h-full flex items-center justify-center rounded-md mr-1 p-1'>
                        <Button
                            buttonType={'icon'}
                            src={'/assets/icons/editIcon.png'}
                            onClick={onDelete}
                            variant="primary"
                            className={'p-5'}
                        />
                    </div>
                    <div className='w-full h-full flex items-center justify-center rounded-md p-1' id={item.id} onClick={onDelete}>
                        <Button
                            buttonType={'icon'}
                            src={'/assets/icons/deleteIcon.png'}
                            onClick={onDelete}
                            variant="primary"
                            className={''}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};


export default ListViewItem;