import { createGlobalStyle } from "styled-components";

export const GlobalStyles: any = createGlobalStyle`

    :root {
        width: 100vw;
        max-width: 100%;
        height: 100vh;
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
        font-family: 'Inter', sans-serif;

        body{
            width: 100%;
            height: 100%;
            max-width: 100%;
        }
        
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

        a{
            text-decoration: none;
        }
        
        --blue: #0000FF;
        --white:#FFFF;
        --yellow:#FFAB00;
        --green:#36B37E;
        --oranje:#FF5630;
        --purple:#7A1CBD;

        

    }
`;
