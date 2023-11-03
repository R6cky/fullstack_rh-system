import styled from "styled-components";

export const StyleMainPageDefault = styled.div`

    width: 100%;
    height: 100vh;
    border: solid green;

    .container-data{
        border: red 1px solid;
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin: 0 auto;

        .container-data-left{
            width: 400px;
            border: solid 1px black;
        }
    
        .container-data-right{
            width: 400px;
            border: solid 1px black;
        }
    
    }

    .header-default-page{
        border: solid;
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }


    .buttons-right-area{
            border: solid red;
            width: 300px;
            display: flex;
            justify-content: space-around;
            align-items: center;
    }


`