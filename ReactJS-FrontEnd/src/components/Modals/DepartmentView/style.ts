import styled from "styled-components";

export const StyleDepartmentView = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100%;
    height: 100vh;
    position: absolute;
    top: 0px;
    background: rgba(0, 0, 0, 0.8);

    .close-modal{
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


    .data-modal-view{
        border: solid red;
        width: 700px;
        max-width: 100%;
        height: 200px;
        background-color: white;
      

    }

    .header-modal{
        border: solid red;
        width: 100%;
        height: 120px;
        display: flex;
        flex-direction: column;
        justify-content:space-around ;

    }

    .select-area{
        border: solid red;
        width: 100%;
        max-width: 100%;
        height: 35px;
        display: flex;
        justify-content: space-around;

        select{
            width: 200px;
            max-width: 100%;
            height: 100%;
        }

        .btn-hire{
            height: 100%;
        }
    }

`