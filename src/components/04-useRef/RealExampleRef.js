import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import '../../index.css';

export const RealExampleRef = () => {

    const [show, setShow] = useState( false );

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr />

            { show && <MultipleCustomHooks /> }

            <button
                className='btn btn-outline-primary mt-5'
                onClick={ () => {
                    setShow( !show )
                }}
            >
                Hide/Show
            </button>

        </div>
    );
};
