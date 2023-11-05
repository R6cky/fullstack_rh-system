import styled from "styled-components";

export const StyleDepartmentEdit = styled.div`

    border:  solid red;

    width: 100%;
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;

    .form-area{
        border: solid red;
        width: 500px;
        max-width: 100%;
        height: 300px;

        .title-department-edit{
            text-align: center;
        }

        form{
            border: solid red;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            height: 200px;
 
            input{
                width: 250px;
                max-width: 100%;
                height: 35px;
            }

            button{
                width: 250px;
                max-width: 100%;
                height: 35px;
            }
        }

    }

`