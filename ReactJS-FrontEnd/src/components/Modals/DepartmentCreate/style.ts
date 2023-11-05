import styled from "styled-components";

export const StyleDepartmentCreate = styled.div`

    border: solid red;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;


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