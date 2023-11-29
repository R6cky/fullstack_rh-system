import styled from "styled-components";

export const StyleEmployeeRemove = styled.div`
    border: solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background: rgba(0, 0, 0, 0.8);


    .close-modal{
        border: solid;
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: flex-end;
        

        span{
            border-radius: 50%;
            border: solid ;
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: white;
            cursor: pointer;
        }
    }

    .data-area{
        border: solid red;
        width: 400px;
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .title-employee-remove{
            border: solid;
            text-align: center;
        }

        button{
            width: 250px;
            max-width: 100%;
            height: 35px;

        }

    }

`