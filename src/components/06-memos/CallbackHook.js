import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';
import '../../index.css';

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    /* const increment = () => {
        setCounter( counter + 1 );
    }; */

    // NOTE: Genera una versión memorizada de la función que solo se ejecuta cuando cambia la dependencia definida.
    const increment = useCallback( ( num ) => {
        setCounter( c => c + num );
    }, [ setCounter ]);

    return (
        <div>
            <h1>useCallback Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={ increment }/>
        </div>
    )
}
