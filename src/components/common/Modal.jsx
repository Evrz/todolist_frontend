import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ title, children, onClose, onAdd }) => {
    return (
        <div className="flex w-full h-full fixed inset-0 items-center justify-center z-50">
            <div className="w-auto h-auto flex flex-col bg-white p-4 rounded-lg shadow-lg transform scale-105">
                <div className='flex bg-cyan-100 w-full h-1/6 rounded-t-md justify-between px-5 '>
                    <span className='flex items-center text-heading-6'>{title}</span>
                    <button type="button" className="modal-close text-heading-4" onClick={onClose}>
                        <span className='text-red-500'>&times;</span>
                    </button>
                </div>
                <div className='flex flex-col item h-full bg-slate-100 w-full rounded-b-md p-5'>
                    <div className="modal-body h-auto rounded-md">
                        {children}
                    </div>
                    <div className="mt-4 flex justify-end">
                        <button type="button" className="bg-red-400 mr-2  px-5 py-1 rounded-sm" onClick={onClose}>CANCEL</button>
                        <button type="button" className="bg-blue-400 px-5 py-1 rounded-sm" onClick={onAdd}>ADD</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
};

export default Modal;
