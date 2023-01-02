import { fireEvent, screen, render } from "@testing-library/react";
import Button from "../components/Button";
import { ThemeProvider} from  'styled-components';
import  themelight  from '../styles/themes/light';
import '@testing-library/jest-dom/extend-expect';

describe('<Button />', () =>{
    it('should render the component onto the screen', () =>{
        render(
            <ThemeProvider theme={themelight}>
                <Button />
            </ThemeProvider>
        );
        expect(screen.getByTestId('button')).toBeInTheDocument();
    })

    it('should call function on button click', () =>{
        const fn = jest.fn();
        render(
            <ThemeProvider theme={themelight}>
                <Button onClick={fn}/>
            </ThemeProvider>
        );
        const button =  screen.getByTestId('button') as HTMLInputElement;
        fireEvent.click(button);
        expect(fn).toHaveBeenCalledTimes(1);
    })

    it('should be disabled when disabled is true', () =>{
        render(
            <ThemeProvider theme={themelight}>
                <Button disabled={true}/>
            </ThemeProvider>
        );
        const button =  screen.getByTestId('button') as HTMLInputElement;
        expect(button).toBeDisabled();
    })

    it('should be enabled  when disabled is true', () =>{
        render(
            <ThemeProvider theme={themelight}>
                <Button disabled={false}/>
            </ThemeProvider>
        );
        const button =  screen.getByTestId('button') as HTMLInputElement;
        expect(button).not.toBeDisabled();
    })
})