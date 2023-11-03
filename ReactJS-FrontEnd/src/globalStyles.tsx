import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
        
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
        ul{
            list-style:none;
            margin: 0;
            padding: 0;
        }

        button{
            cursor: pointer;
        }

        select{
            cursor: pointer;
        }
        
        --blue: #0000FF;
        --black:#FFFF;
        --yellow:#FFAB00;
        --green:#36B37E;
        --oranje:#FF5630;

        

    }
`;
