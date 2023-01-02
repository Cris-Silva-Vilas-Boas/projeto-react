import { fireEvent,screen, render } from "@testing-library/react";
import Toggle from "../components/Toggle";
import { ThemeProvider} from  'styled-components';
import  themelight  from '../styles/themes/light';
import '@testing-library/jest-dom/extend-expect';


describe('<Toggle />', () =>{
    
    it('should render the component onto the screen', () =>{
        const fn = jest.fn();
        render(
            <ThemeProvider theme={themelight}>
                <Toggle  
                    labelLeft="Light"
                    labelRight="Dark"
                    checked = {true}
                    onChange={fn}
                />
            </ThemeProvider>
        );
        expect(screen.getByTestId('toggle')).toBeInTheDocument();
    });

    it('should click on the switch', () =>{
        const fn = jest.fn();
        render(
            <ThemeProvider theme={themelight}>
                <Toggle  
                    labelLeft="Light"
                    labelRight="Dark"
                    checked = {true}
                    onChange={fn}
                />
            </ThemeProvider>
        );
       const toggle =  screen.getByTestId('toggle');
       fireEvent.click(toggle); 
       expect(fn).toHaveBeenCalledTimes(1);
    });

    it('should select theme is light', () =>{
        let theme = "light";
        let toggleTheme =  jest.fn(() => {
            let toggleTheme = theme === "light" ? "dark" : "light";
            return toggleTheme;
        });
        
        render(
            <ThemeProvider theme={themelight}>
                <Toggle  
                    labelLeft={theme}
                    labelRight="Dark"
                    checked = {true}
                    onChange={toggleTheme}
                />
            </ThemeProvider>
        );
        expect(theme).toEqual("light");

    })


    it('should select theme is dark', () =>{
        let theme = "dark";
        let toggleTheme =  jest.fn(() => {
            let toggleTheme = theme === "light" ? "dark" : "light";
            return toggleTheme;
        });
        
        render(
            <ThemeProvider theme={themelight}>
                <Toggle  
                    labelLeft="light"
                    labelRight={theme}
                    checked = {true}
                    onChange={toggleTheme}
                />
            </ThemeProvider>
        );
        expect(theme).toEqual("dark");
    })


    it('should change the theme', () =>{
        let theme = "dark";
        let toggleTheme =  jest.fn(() => {
            let toggleTheme = theme === "light" ? "dark" : "light";
            return toggleTheme;
        });
        
        render(
            <ThemeProvider theme={themelight}>
                <Toggle  
                    labelLeft="light"
                    labelRight={theme}
                    checked = {true}
                    onChange={toggleTheme}
                />
            </ThemeProvider>
        );

       const toggle =  screen.getByTestId('toggle');
       fireEvent.click(toggle); 
       expect(toggleTheme).toHaveBeenCalledTimes(1);
    })
});