import { shallow } from 'enzyme';
import { HooksApp } from "../HooksApp";

describe('Pruebas en el HooksApp component.', () => {

    test('debe de hacer match con el snapshot.', () => {

        const wrapper = shallow( <HooksApp /> );

        expect( wrapper ).toMatchSnapshot();

    });

});