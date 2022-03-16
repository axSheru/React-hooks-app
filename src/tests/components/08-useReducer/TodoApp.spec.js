import { shallow } from "enzyme";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";

describe('Pruebas en el componente TodoApp.', () => {
    
    const wrapper = shallow( <TodoApp /> );

    test('debe de hacer match con el snapshot.', () => {

        expect( wrapper ).toMatchSnapshot();

    });

});