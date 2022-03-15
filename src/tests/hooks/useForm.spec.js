import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('Pruebas en el hook useForm', () => {

    const initialForm = {
        name: 'Alex',
        email: 'alex@test.com'
    };

    test('debe de regresar un formulario por defecto.', () => {

        const { result } = renderHook( () => useForm( initialForm ) );
        const [ formValues, handleInputChange, reset ] = result.current;

        expect( formValues ).toEqual( initialForm );
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );

    });

});