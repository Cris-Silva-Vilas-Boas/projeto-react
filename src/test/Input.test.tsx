import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Input from "../components/Input";
import userEvent from "@testing-library/user-event";

describe('<Input />', () =>{
    it('should render the component onto the screen', () =>{
        render(<Input data-testid="input" defaultValue={'testing'}/>);
        expect(screen.getByTestId('input')).toBeInTheDocument();
    })

    it('should have a value of seachValue', () =>{
        render(<Input data-testid="input" defaultValue={'testing'}/>);
        const input = screen.getByTestId('input') as HTMLInputElement;
        expect(input.value).toBe('testing');
    })
    
    it('should call handleChange function on each key pressed', () => {
        const fn = jest.fn();
        const value = 'Teste cris';
        render(<Input data-testid="input" onChange={fn} value={value} />);
        const input = screen.getByTestId('input') as HTMLInputElement;
        userEvent.type(input, value);
        expect(input.value).toBe(value);
    })
})