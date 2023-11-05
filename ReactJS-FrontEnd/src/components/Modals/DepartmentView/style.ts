import styled from "styled-components";

export const StyleDepartmentView = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    .data-modal-view{
        border: solid red;
        width: 700px;
        max-width: 100%;
        height: 200px;

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