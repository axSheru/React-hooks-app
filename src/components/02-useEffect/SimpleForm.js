import React, { useEffect, useState } from 'react';
import './effects.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
    });

    const { name, email } = formState;

    useEffect( () => {
        console.log('Hello there!');
    }, []);

    useEffect( () => {
        console.log('formState cambió.');
    }, [ formState ]);

    useEffect( () => {
        console.log('email cambió.');
    }, [ email ]);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [ target.name ]: target.value,
        });
    };

    return (
        <>
        
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name='name'
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name='email'
                    className='form-control'
                    placeholder='email@test.com'
                    autoComplete='off'
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>
        </>
    )
};
