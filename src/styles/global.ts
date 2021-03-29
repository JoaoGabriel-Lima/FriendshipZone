import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme.colors.background};
        /* color: ${props => props.theme.colors.purple}; */
        font-family: 'Montserrat', sans-serif;
        font-weight: 600
    }
`
