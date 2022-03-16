import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en el componente TodoListItem.', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow( <TodoListItem
        todo={ demoTodos[0] }
        i={ 0 }
        handleDelete={ handleDelete }
        handleToggle={ handleToggle }        
    /> );

    test('debe de hacer match con el snapshot.', () => {

        expect( wrapper ).toMatchSnapshot();

    });

});