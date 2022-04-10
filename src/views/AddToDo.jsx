import { useState } from "react"

export default function AddToDo({ togglePopup }) {

    return (
        <div className='popup-box'>
            <div className='box'>
                <button className='btn-close' onClick={togglePopup}><img src="/assets/close-icon.png" alt="Close icon" /></button>

                <span className="add-todo-title">Añadir tarea</span>

                <form /* onSubmit={} */ className='add-todo-form'>

                    <label className='add-todo-label'>Nombre</label>
                    <input className='add-todo-input' type="text" placeholder='Nombre' />

                    <label className='add-todo-label'>Descripción</label>
                    <textarea className='add-todo-input description' type="text" placeholder='Descripción' />

                    <div className='add-todo-form-btn-container'>
                        <button className='add-todo-form-btn-cancel'>Cancelar</button>
                        <button className='add-todo-form-btn-add'>Añadir</button>
                    </div>

                </form>

            </div>
        </div >
    )
}
