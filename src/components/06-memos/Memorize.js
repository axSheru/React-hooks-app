import React, { useState } from 'react';
import '../../index.css';
import { useCounterGenerico } from '../../hooks/useCounterGenerico';
import { Small } from './Small';

export const Memorize = () => {

    const { counter, increment } = useCounterGenerico( 10 );
    const [show, setShow] = useState( true );

    return (
        <div>
            <h1>Counter: <Small value={ counter } /></h1>
            <hr />

            <button
                className='btn btn-outline-primary'
                onClick={ increment }
            >
                +1
            </button>
            <button
                className='btn btn-outline-primary'
                onClick={ () => {
                    setShow( !show );
                }}
            >
                Show/Hide { JSON.stringify( show ) }
            </button>
        </div>
    )
}
