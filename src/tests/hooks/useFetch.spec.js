import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";

describe('Pruebas en useFetch hook.', () => {

    test('debe de retornar la información por defecto.', () => {

        const { result } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1') );

        const { data, loading, error } = result.current;

        expect( data ).toBe( null );
        expect( loading ).toBe( true );
        expect( error ).toBe( null );

    });

});