import React, { useRef } from 'react';
import '../../index.css';

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <h1>FocusScreen</h1>
            <hr />

            <input
                type="text"
                ref={ inputRef }
                className='form-control'
                placeholder='Su nombre'
            />

            <button
                className='btn btn-outline-primary mt-3'
                onClick={ handleClick }
            >
                Focus
            </button>
        </div>
    );
}
