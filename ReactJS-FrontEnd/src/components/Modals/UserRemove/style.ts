import styled from "styled-components";

export const StyleUserRemove = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
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

    .data-area{
        margin-top: 50px;
        width: 400px;
        max-width: 100%;
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        background-color: var(--white);
        border-radius: 8px;

        .title-user-remove{
            text-align: center;
            color: var(--purple);
        }

        button{
            width: 250px;
            max-width: 100%;
            height: 35px;

        }

    }

`