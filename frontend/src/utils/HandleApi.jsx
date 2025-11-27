import axios from 'axios'

const baseURL = 'https://todo-app-backend-production-e2b8.up.railway.app'

const getAllTodo = (setToDo) => {
    axios
        .get(baseURL)
        .then(({ data }) => {
            console.log('data -->', data)
            setToDo(data)
        })
}

const addToDo = (text, setText, setToDo) => {
    axios
        .post(`${baseURL}/save`, { text })
        .then(({ data }) => {
            console.log('data -->', data)
            setText("")
            getAllTodo(setToDo)
        })
        .catch((err) => console.log(err))

}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
    axios
        .post(`${baseURL}/update`, { _id: toDoId, text })
        .then(({ data }) => {
            console.log('data -->', data)
            setText("")
            setIsUpdating(false)
            getAllTodo(setToDo)
        })
        .catch((err) => console.log(err))
}


const deleteToDo = (toDoId, setToDo) => {
    axios
        .post(`${baseURL}/delete`, { _id: toDoId })
        .then(() => {
            getAllTodo(setToDo)
        })
        .catch((err) => console.log(err))
}

export { getAllTodo, addToDo, updateToDo, deleteToDo }