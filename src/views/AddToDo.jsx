import { useState } from "react"

export default function AddToDo({ togglePopup, setTodos }) {

    const [todoTitle, setTodoTitle] = useState("");
    const [todoDescription, setTodoDescription] = useState("");

    const [completeField, setCompleteField] = useState(false);


    const handleSubmit = (event) => {

        event.preventDefault();

        //prevents the user from submitting empty todos
        if (!todoTitle || !todoDescription) {
            return setCompleteField(true);
        }

        //adds the new task to the list
        setTodos(todos => [{ title: todoTitle, description: todoDescription }, ...todos]);

        //closes popup after submit
        togglePopup();
    }


    return (

        <div className='popup-box'>
            <div className='box'>

                <div className='btn-close-container'>
                    <button className='btn-close' onClick={togglePopup}><img src="/assets/close-icon.png" alt="Close icon" /></button>
                </div>

                <span className="add-todo-title">Añadir tarea</span>

                <form onSubmit={handleSubmit} className='add-todo-form'>

                    <label className='add-todo-label'>Nombre</label>
                    <input className='add-todo-input' type="text" placeholder='Nombre' value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} />

                    <label className='add-todo-label'>Descripción</label>
                    <textarea className='add-todo-input description' type="text" placeholder='Descripción' value={todoDescription} onChange={(e) => setTodoDescription(e.target.value)} />

                    <div className='add-todo-form-btn-container'>
                        <button className='add-todo-form-btn-cancel' onClick={togglePopup}>Cancelar</button>
                        <button className='add-todo-form-btn-add' type='submit'>Añadir</button>
                    </div>

                    {
                        completeField &&
                        <span className='add-todo-complete-field'> Debes añadir título y descripción a la tarea</span>
                    }

                </form>

            </div>
        </div >
    )
}
