import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {

    console.log('Me volví a generar.');

    return (
        <button
            className='btn btn-outline-success'
            onClick={ () => {
                increment(  5);
            }}
        >
            Incrementar
        </button>
    )
});
