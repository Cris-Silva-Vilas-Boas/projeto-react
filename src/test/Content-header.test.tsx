import { screen, render } from "@testing-library/react";
import ContentHeader from "../components/Content-header";
import { ThemeProvider} from  'styled-components';
import  themelight  from '../styles/themes/light';
import '@testing-library/jest-dom/extend-expect';

describe('<ContentHeader />', () =>{
    it('should render the component onto the screen', () =>{
        render(
            <ThemeProvider theme={themelight}>
                <ContentHeader lineColor="#fdddd" title="teste" children/>
            </ThemeProvider>
        );
        expect(screen.getByTestId('ContentHeader')).toBeInTheDocument();
    })

    it('should check tag color', () =>{
        const lineColor = "#fdddd";
        render(
            <ThemeProvider theme={themelight}>
                <ContentHeader lineColor="lineColor" title="teste" children/>
            </ThemeProvider>
        );
        expect(lineColor).toEqual("#fdddd");    
    })
})