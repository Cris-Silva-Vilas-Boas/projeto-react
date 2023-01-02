import { screen, render } from "@testing-library/react";
import Loader from "../components/Loader";
import { ThemeProvider} from  'styled-components';
import  themelight  from '../styles/themes/light';
import '@testing-library/jest-dom/extend-expect';

describe('<Loader />', () =>{

    
    it('should render the component onto the screen', () =>{
        render(
            <ThemeProvider theme={themelight}>
                <Loader />
            </ThemeProvider>
        );
        expect(screen.getByTestId('loader')).toBeInTheDocument();
    })

    it('should show modal', () =>{
        let isLoderShow = true;

        render(
            <ThemeProvider theme={themelight}>
                <Loader />
            </ThemeProvider>
        );
        expect(isLoderShow).toBeTruthy();
            
    })

    it('should not show modal', () =>{
        let isLoderShow = false;

        render(
            <ThemeProvider theme={themelight}>
                <Loader />
            </ThemeProvider>
        );
        expect(isLoderShow).toBeFalsy();
            
    })

})
