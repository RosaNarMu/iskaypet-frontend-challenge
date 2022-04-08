import { useState } from "react"

export default function AddToDo({ togglePopup }) {

    return (
        <div className='popup-box'>
            <div className='box'>
                <button className='btn-close' onClick={togglePopup}>x</button>
                <span>popup content</span>

            </div>
        </div >
    )
}
