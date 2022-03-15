import { shallow } from "enzyme";
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";

describe('Pruebas en el componente RealExampleRef.', () => {

    test('debe de hacer match con el snapshot.', () => {

        const wrapper = shallow( <RealExampleRef /> );

        expect( wrapper ).toMatchSnapshot();

    });

});