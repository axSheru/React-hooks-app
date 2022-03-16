import { shallow } from "enzyme";
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";

describe('Pruebas en el componente TodoAdd.', () => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow( <TodoAdd
        handleAddTodo={ handleAddTodo }
    /> );

    test('debe de hacer match con el snapshot.', () => {

        expect( wrapper ).toMatchSnapshot();
        
    });

});