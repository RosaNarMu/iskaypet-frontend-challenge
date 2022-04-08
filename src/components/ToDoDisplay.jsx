import { useState, useEffect } from "react";
import axios from "axios";
import AddToDo from "../views/AddToDo";

export default function ToDoDisplay() {

    const [todos, setTodos] = useState([]);

    const [isOpen, setIsOpen] = useState(false)


    useEffect(() => {
        const axiosTodos = async () => {
            const response = await axios('https://jsonplaceholder.typicode.com/todos/');
            setTodos(response.data.splice(0, 3));
        };
        axiosTodos();
    }, []);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

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
                        <button>

                            <img src="/assets/trash 1.png" alt="Delete icon" className='todo-delete' />
                        </button>
                    </div>
                ))}
                <button className='todo-add-btn' onClick={togglePopup}>Añadir tarea</button>
            </div>

            {isOpen && <AddToDo
                togglePopup={togglePopup}
            />
            }

        </main>
    )
}

