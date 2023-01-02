import { screen, render } from "@testing-library/react";
import { ThemeProvider} from  'styled-components';
import  themelight  from '../styles/themes/light';
import '@testing-library/jest-dom/extend-expect';
import Li from "../components/List";

describe('<List />', () =>{
    it('should render the component onto the screen', () =>{
        render(
            <ThemeProvider theme={themelight}>
                <Li />
            </ThemeProvider>
        );
        expect(screen.getByTestId('list')).toBeInTheDocument();
    })
})