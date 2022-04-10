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

    //controls popup visibility
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    //deletes todo
    const removeTodo = (title) => {
        setTodos(todos.filter(todo => todo.title !== title));
    };

    return (
        <main>
            <span>Mis tareas</span>
            <div className='todo-container'>
                {todos && todos.map(({ id, title, description }) => (
                    <div key={title} className='todo-card'>
                        <div className='todo-text'>
                            <span>{title}</span>
                            {description &&

                                <p>{title}</p>
                            }
                        </div>
                        <button onClick={() => removeTodo(title)}>

                            <img src="/assets/trash 1.png" alt="Delete icon" className='todo-delete' />
                        </button>
                    </div>
                ))}
                <button className='todo-add-btn' onClick={togglePopup}>Añadir tarea</button>
            </div>

            {isOpen && <AddToDo
                togglePopup={togglePopup} setTodos={setTodos}
            />
            }

        </main>
    )
}

