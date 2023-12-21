import styled from "styled-components";

export const StyleUserEdit = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:center;
    align-items: normal;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 2;
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


    .form-area{
        margin-top: 50px;
        width: 500px;
        max-width: 100%;
        height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--white);
        border-radius: 8px;

        form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
            

            input{
                width: 300px;
                max-width: 100%;
                height: 40px;
                border: solid var(--purple) 1px;
                border-radius: 4px;
                font-size: 16px;
            }


            button{
                width: 300px;
                max-width: 100%;
                height: 40px;
            }
        }

    }

`