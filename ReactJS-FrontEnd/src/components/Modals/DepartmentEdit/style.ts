import styled from "styled-components";

export const StyleDepartmentEdit = styled.div`

    border:  solid green;
    width: 100%;
    max-width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-content: center;
    position: fixed;
    top: 0px;
    left: 0px;
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