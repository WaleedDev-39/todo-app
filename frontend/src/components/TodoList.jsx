import React from 'react'
import { BiSolidEditAlt } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'


const TodoList = ({ text, updateMode, deleteToDo }) => {
  return (
    <div className='flex justify-between items-center gap-50 bg-white rounded-md w-120 text-black py-4 px-3 '>
      <div className='list flex justify-between w-full'>
        <div className='text'>
          {text}
        </div>
        <div className='flex gap-2'>
          <BiSolidEditAlt className='cursor-pointer text-xl' onClick={updateMode} />
          <MdDelete className='cursor-pointer text-xl' onClick={deleteToDo} />
        </div>

      </div>
    </div>
  )
}

export default TodoList