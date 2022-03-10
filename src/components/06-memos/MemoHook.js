import React, { useMemo, useState } from 'react';
import { useCounterGenerico } from '../../hooks/useCounterGenerico';
import { procesoPesado } from '../../helpers/procesoPesado';
import '../../index.css';

export const MemoHook = () => {

    const { counter, increment } = useCounterGenerico( 1000 );
    const [show, setShow] = useState( true );

    const memoProcesoPesado = useMemo(() => procesoPesado( counter ), [ counter ]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{ counter }</small></h3>
            <hr />

            <p>{ memoProcesoPesado }</p>

            <button
                className='btn btn-outline-primary'
                onClick={ increment }
            >
                +1
            </button>
            <button
                className='btn btn-outline-primary ml-3'
                onClick={ () => {
                    setShow( !show );
                }}
            >
                Show/Hide { JSON.stringify( show ) }
            </button>
        </div>
    )
}
