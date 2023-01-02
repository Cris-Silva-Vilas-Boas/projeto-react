import { screen, render } from "@testing-library/react";
import { ThemeProvider} from  'styled-components';
import  themelight  from '../styles/themes/light';
import '@testing-library/jest-dom/extend-expect';
import Content from "../components/Content";

describe('<Content />', () =>{
    it('should render the component onto the screen', () =>{
        render(
            <ThemeProvider theme={themelight}>
                <Content />
            </ThemeProvider>
        );
        expect(screen.getByTestId('content')).toBeInTheDocument();
    })
})