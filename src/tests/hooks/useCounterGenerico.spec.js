import { renderHook } from "@testing-library/react-hooks";
import { useCounterGenerico } from "../../hooks/useCounterGenerico";

describe('Pruebas en useCounter hook.', () => {

    test('debe de retornar valores por defecto.', () => {

        const { result } = renderHook( () => useCounterGenerico() );

        expect( result.current.counter ).toBe( 10 );
        expect( typeof result.current.increment ).toBe( 'function' );
        expect( typeof result.current.decrement ).toBe( 'function' );
        expect( typeof result.current.reset ).toBe( 'function' );

    });

});