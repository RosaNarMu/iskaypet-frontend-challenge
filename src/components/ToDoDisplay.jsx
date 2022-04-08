import { useState, useEffect } from "react";
import axios from "axios";

export default function ToDoDisplay() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const axiosTodos = async () => {
            const response = await axios('https://jsonplaceholder.typicode.com/todos/');
            setTodos(response.data.splice(0, 3));
        };
        axiosTodos();
    }, []);

    return (
        <main>
            <span>Mis tareas</span>
            <div className='todo-container'>
                {todos && todos.map(({ id, title, body }) => (
                    <div key={id} className='todo-card'>
                        <div className='todo-text'>
                            <span>Tarea {id}</span>
                            <p>{title}</p>
                        </div>
                        <img src="/assets/trash 1.png" alt="Delete icon" className='todo-delete' />
                    </div>
                ))}
            </div>
        </main>
    )
}

