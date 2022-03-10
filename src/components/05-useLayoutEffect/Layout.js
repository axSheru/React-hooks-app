import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounterGenerico } from '../../hooks/useCounterGenerico';
import '../../index.css';
import './layout.css';

export const Layout = () => {

    const { counter, increment } = useCounterGenerico(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    const { quote } = !!data && data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect( () => {

        console.log( pTag.current.getBoundingClientRect() );
        setBoxSize( pTag.current.getBoundingClientRect() );

    }, [quote]);

    return (
        <>
            <h1>LayoutEffect</h1>
            <hr />

            <blockquote className='blockquote text-right'>
                <p
                    className='mb-0'
                    ref={ pTag }
                >
                    { quote }
                </p>
            </blockquote>
            <pre>
                { JSON.stringify( boxSize, null, 3 ) }
            </pre>
            <button
                className='btn btn-outline-primary'
                onClick={ increment }
            >
                Siguiente quote
            </button>
            
        </>
    )
}
