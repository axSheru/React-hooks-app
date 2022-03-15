import { shallow } from "enzyme";
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";

describe('Pruebas en el componente RealExampleRef.', () => {

    const wrapper = shallow( <RealExampleRef /> );

    test('debe de hacer match con el snapshot.', () => {

        expect( wrapper ).toMatchSnapshot();

        expect( wrapper.find( 'MultipleCustomHooks' ).exists() ).toBeFalsy();

    });

    test('debe de mostrar el componente MultipleCustomHooks', () => {

        wrapper.find( 'button' ).simulate( 'click' );

        expect( wrapper.find( 'MultipleCustomHooks' ).exists() ).toBeTruthy();

    });

});