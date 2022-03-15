import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";

describe('Pruebas en el componente MultipleCustomHooks.', () => {

    test('debe de hacer match con el snapshot.', () => {

        const wrapper = shallow( <MultipleCustomHooks /> );

        expect( wrapper ).toMatchSnapshot();

    });

});