import { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskForm() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const { createTask } = useContext(TaskContext)

    const handleSudmit = (e) => {
        e.preventDefault()
        createTask(
            title,
            description
        )
        setTitle("")
        setDescription("")
    }

    return (
        <div className=' max-w-md mx-auto'>
            <form
                className=' bg-slate-800 p-10 mb-4'
                onSubmit={handleSudmit}
            >
                <h1 className=' text-3xl font-bold text-white mb-3 text-center'>
                    Crea tu tarea
                </h1>
                <input
                    className=' bg-slate-300 p-3 w-full mb-2'
                    type="text"
                    placeholder='Escribe una tarea'
                    onChange={(e) => { setTitle(e.target.value) }}
                    value={title}
                    autoFocus
                />
                <textarea
                    className=' bg-slate-300 p-3 w-full mb-2'
                    placeholder='Escribe una description'
                    onChange={(e) => {
                        console.log(e.target.value)
                        setDescription(e.target.value)
                    }}
                    value={description}
                >
                </textarea>
                <button
                    className=' bg-indigo-500 px-1 text-white rounded-md p-2'
                >
                    Enviar Tarea
                </button>
            </form>
        </div>
    )
}

export default TaskForm