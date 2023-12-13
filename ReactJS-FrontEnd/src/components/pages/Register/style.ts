import styled from "styled-components";

export const StyleRegister = styled.div`
    .header-default-page{
        width: 90rem;
        max-width: 100%;
        height: 5rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        -webkit-box-shadow: 0px -1px 8px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px -1px 8px 0px rgba(0,0,0,0.75);
        box-shadow: 0px -1px 8px 0px rgba(0,0,0,0.75);
    }

    


    .buttons-right-area{
            width: 300px;
            display: flex;
            justify-content: space-around;
            align-items: center;

            button{
                width: 9rem;
                height: 3rem;
                border: solid 1px var(--blue);
                border-radius: 4px;
                font-size: 1.2rem;
                :visited{
                    color: var(--blue);
                }

            }
    }


        .register-container{
        border: solid red;
        width: 500px;
        max-width: 100%;
        height: 400px;
        border-radius: 10px;
        
    }


    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;

`