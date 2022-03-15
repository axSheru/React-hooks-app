import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";
// import { useCounterGenerico } from "../../../hooks/useCounterGenerico";

jest.mock( "../../../hooks/useFetch" );
// jest.mock( "../../../hooks/useCounterGenerico" );

describe('Pruebas en el componente MultipleCustomHooks.', () => {

    /* useCounterGenerico.mockReturnValue({
        counter: 1,
        increment: () => {},
    }); */

    test('debe de hacer match con el snapshot.', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null,
        });

        const wrapper = shallow( <MultipleCustomHooks /> );

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de hacer match con el snapshot cuando se obtiene información.', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'Alex',
                quote: 'Hola mundo',
            }],
            loading: false,
            error: null,
        });

        const wrapper = shallow( <MultipleCustomHooks /> );

        expect( wrapper.find( '.alert' ).exists() ).toBeFalsy();
        expect( wrapper.find( '.mb-0' ).text().trim() ).toBe( 'Hola mundo' );
        expect( wrapper.find( 'footer' ).text().trim() ).toBe( 'Alex' );

    });

});