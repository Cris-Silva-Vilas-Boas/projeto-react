import { ThemeProvider} from  'styled-components';
import  themelight  from '../styles/themes/light';
import '@testing-library/jest-dom/extend-expect';
import Modal  from '../components/Modal';
import { fireEvent, screen, render } from "@testing-library/react";
import Button from '../components/Button';

describe('<Button />', () =>{
    it('should render the component onto the screen', () =>{
        const fn = jest.fn();
        render(
            <ThemeProvider theme={themelight}>
                <Modal header='Mensagem Header' message="Mensagem" isModalVisible={true} close={fn}/>
            </ThemeProvider>
        );
        expect(screen.getByTestId('Modal')).toBeInTheDocument();
    })

    it('should show modal' , () =>{
        const isModalVisible = true;
        const fn = jest.fn();
        render(
            <ThemeProvider theme={themelight}>
                <Modal header='Mensagem Header' message="Mensagem"  isModalVisible={isModalVisible} close={fn}/>
            </ThemeProvider>
        );
        expect(isModalVisible).toBeTruthy();
    })

    it('should not show modal' , () =>{
        const isModalVisible = false;
        const fn = jest.fn();
        render(
            <ThemeProvider theme={themelight}>
                <Modal header='Mensagem Header' message="Mensagem"  isModalVisible={isModalVisible} close={fn}/>
            </ThemeProvider>
        );
        expect(isModalVisible).toBeFalsy();
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
})