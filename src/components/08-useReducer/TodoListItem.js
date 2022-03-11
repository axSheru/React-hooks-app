import React from 'react';
import './styles.css';

export const TodoListItem = ({ todo, i, handleToggle, handleDelete }) => {
    return (
        <li
            key={ todo.id }
            className='list-group-item'
        >
            <p
                className={ `text-center ${ todo.done && 'complete' }` }
                onClick={ () => handleToggle( todo.id ) }
            >
                { i + 1 }. { todo.desc }
            </p>
            <button
                className='btn btn-outline-danger'
                onClick={ () => handleDelete( todo.id ) }
            >
                Borrar
            </button>
        </li>
    )
}
