import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";

jest.mock( "../../../hooks/useFetch" );

describe('Pruebas en el componente MultipleCustomHooks.', () => {

    test('debe de hacer match con el snapshot.', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null,
        });

        const wrapper = shallow( <MultipleCustomHooks /> );

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de mostrar la información.', () => {

        useFetch

    });

});