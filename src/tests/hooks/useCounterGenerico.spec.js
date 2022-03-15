import { renderHook, act } from "@testing-library/react-hooks";
import { useCounterGenerico } from "../../hooks/useCounterGenerico";

describe('Pruebas en useCounter hook.', () => {

    test('debe de retornar valores por defecto.', () => {

        const { result } = renderHook( () => useCounterGenerico() );

        expect( result.current.counter ).toBe( 10 );
        expect( typeof result.current.increment ).toBe( 'function' );
        expect( typeof result.current.decrement ).toBe( 'function' );
        expect( typeof result.current.reset ).toBe( 'function' );

    });

    test('debe de retornar el valor especificado en el counter.', () => {

        const value = 100;

        const { result } = renderHook( () => useCounterGenerico( value ) );

        expect( result.current.counter ).toBe( value );

    });

    test('debe de incrementar el counter en 1.', () => {

        const value = 100;

        const { result } = renderHook( () => useCounterGenerico( value ) );
        const { increment } = result.current;

        act( () => {
            increment();
        });

        expect( result.current.counter ).toBe( value + 1 );

    });

});