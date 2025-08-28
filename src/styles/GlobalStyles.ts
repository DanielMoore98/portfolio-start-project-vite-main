import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.ts";

export const GlobalStyles = createGlobalStyle `
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    body {
        margin: 0;
        font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${theme.colors.secondaryBg};
    }

    a {
        text-decoration: none;
    }
    
    ul {
        list-style: none;
    }
    
    button {
        background-color: unset;
        border: none;
    }
    
`