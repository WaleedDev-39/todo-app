import React, { useEffect, useState } from 'react'
import TodoList from './components/TodoList'
import { addToDo, getAllTodo, updateToDo, deleteToDo } from './utils/HandleApi'

const App = () => {

    const [toDo, setToDo] = useState([])
    const [text, setText] = useState("")
    const [isUpdating, setIsUpdating] = useState(false)
    const [toDoId, setToDoId] = useState("")

    useEffect(() => {
        getAllTodo(setToDo)

    }, [])

    const updateMode = (_id, text) => {
        setIsUpdating(true)
        setText(text)
        setToDoId(_id)

    }

    return (
        <div className='container'>
            <div className='w-full h-screen flex flex-col  items-center'>
                <div className='m-10 flex justify-center items-center flex-col'>
                    <div className='mb-3 text-5xl font-semibold'>ToDo App</div>
                    <div className='flex gap-5'>
                        <input className=' outline-none border-white border-b w-100 p-1' type="text" placeholder='Add ToDos...' value={text} onChange={(e) => setText(e.target.value)} />
                        <a className='bg-white text-black px-3 py-1 cursor-pointer rounded-full' onClick={isUpdating ? () => updateToDo(toDoId, text, setText, setToDo, setIsUpdating) : () => addToDo(text, setText, setToDo)}> {isUpdating ? "Update" : "Add"}</a>

                    </div>

                </div>
                <div className='flex flex-col gap-5'>

                    {toDo.map(
                        (item) => <TodoList key={item._id} text={item.text}
                            updateMode={() => updateMode(item._id, item.text)}
                            deleteToDo={() => deleteToDo(item._id, setToDo)}
                        />
                    )}

                </div>

            </div>

        </div>
    )
}

export default App