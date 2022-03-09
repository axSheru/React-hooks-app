import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounterGenerico } from '../../hooks/useCounterGenerico';
import '../../index.css';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounterGenerico(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                loading
                ?
                    (
                        <div className='alert alert-info text-center'>Loading...</div>
                    )
                :
                    (
                        <>
                            <blockquote className='blockquote text-right'>
                                <p className='mb-0'>{ quote }</p>
                                <footer className='blockquote-footer'>{ author }</footer>
                            </blockquote>
                            <button
                                className='btn btn-outline-primary'
                                onClick={ increment }
                            >
                                Siguiente quote
                            </button>
                        </>
                    )
            }
            
        </>
    )
}
