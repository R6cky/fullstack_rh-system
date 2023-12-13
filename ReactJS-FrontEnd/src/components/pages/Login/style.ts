import styled from "styled-components";

export const StyleLogin = styled.div`

        
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


    .login-container{
        width: 500px;
        max-width: 100%;
        height: 400px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);

        form{
            width:100%;
            max-width: 100%;
            height:18rem;
            display: flex ;
            flex-direction: column;
            justify-content: center;
            

            .input-area-input{
                
                width: 20rem;
                max-width: 100%;
                height: 6rem;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;

                input{
                    width: 90%;
                    max-width: 100%;
                    height: 2rem;
                }
            }


            .input-area-button{
               
                width: 20rem;
                max-width: 100%;
                height: 7rem;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;

                p{
                   
                    width: 40px;
                    height: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                button{
                    width: 92%;
                    max-width: 100%;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1rem;

                    .redirect-link{
                            color: var(--blue);
                    }
                }
            }
        }
        
    }


    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;


`