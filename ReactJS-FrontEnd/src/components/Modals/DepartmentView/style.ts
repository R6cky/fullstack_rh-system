import styled from "styled-components";

export const StyleDepartmentView = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    background: rgba(0, 0, 0, 0.8);

    .close-modal{
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: flex-end;

        span{
            border-radius: 50%;
            border: solid var(--purple) 1px;
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: white;
            cursor: pointer;
            color: var(--purple);
            margin: 5px;

            
        }
        span:hover{
                background-color: var(--purple);
                color: var(--white);
        }
    }


    .data-modal-view{
        width: 700px;
        max-width: 100%;
        height: 200px;
        background-color: white;
        border-radius:8px;
        
    }

    .header-modal{
        width: 100%;
        height: 120px;
        display: flex;
        flex-direction: column;
        justify-content:space-around ;
        color: var(--purple);

        .department-name{
            margin-left: 5px;
        }
        .department-description{
            margin-left: 5px
        }
        .department-owner{
            margin-left:5px;
        }
    }

    .select-area{
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