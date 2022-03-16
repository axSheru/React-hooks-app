import { act } from "@testing-library/react-hooks";
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

    test('No debe de llamar la función handleAddTodo.', () => {

        const formSubmit = wrapper.find( 'form' ).prop( 'onSubmit' );
        
        formSubmit({ preventDefault(){} });

        expect( handleAddTodo ).not.toHaveBeenCalled();
        
    });

    test('debe de llamar la función handleAddTodo.', () => {

        const value = 'Hola mundo';

        wrapper.find( 'input' ).simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });

        const formSubmit = wrapper.find( 'form' ).prop( 'onSubmit' );
        
        formSubmit({ preventDefault(){} });

        expect( handleAddTodo ).toHaveBeenCalled();
        expect( handleAddTodo ).toHaveBeenCalledWith({
            id: expect.any( Number ),
            desc: value,
            done: false,
        });
        expect( wrapper.find( 'input' ).prop( 'value' ) ).toBe( '' );
        
    });

});