import React from 'react'

export const Modal = ({onClose,data}) => {
             
  return (
<div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-20'>
    <div className='flex flex-col items-center justify-center bg-white w-1/2 p-5 shadow-lg'>
    <p>{data}</p>
    <p className="cursor-pointer bg-blue-800 my-2 px-3 py-2 text-white" onClick={onClose} >close X</p>

    </div>
    </div>

  )
}
