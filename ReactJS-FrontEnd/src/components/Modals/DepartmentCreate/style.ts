import styled from "styled-components";

export const StyleDepartmentCreate = styled.div`

    border: solid red;
    width: 100%;
    height: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
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

    .form-area{
        border: solid red;
        width: 500px;
        max-width: 100%;
        height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;

        form{
            border: solid red;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            

            input{
                width: 300px;
                max-width: 100%;
                height: 40px;
            }

            select{
                width: 300px;
                max-width: 100%;
                height: 40px;
            }

            button{
                width: 300px;
                max-width: 100%;
                height: 40px;
            }
        }

    }

`