import styled from "styled-components";

export const StyleMainPageUser = styled.div`

    width: 100%;
    height: 100vh;
    

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
                text-decoration: none;
                

                .logout-button{
                    width: 9rem;
                    height: 3rem;
                    border: none;
                    border-radius: 4px;
                    font-size: 1.2rem;
                    background-color: var(--purple);
                    color: white;
                    font-weight: bold;

                    
                    a{
                        width: 100%;
                        height: 100%;
                        text-decoration: none;
                        color: black;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 16px;
                    }



                }
                
        }

    .user-page-container{
        width: 100%;
        max-width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap:20px;
        align-items: center;


        .userdata-area{
            
            width: 100%;
            height: 10  0px;
            display: flex;
            justify-content: center;
            align-items: center;

            

            .user-data{
                width: 800px;
                margin-top: 10px;
                padding: 5px;
                -webkit-box-shadow: 0px -1px 8px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 0px -1px 8px 0px rgba(0,0,0,0.75);
                box-shadow: 0px -1px 8px 0px rgba(0,0,0,0.75);

            }
        }





        .data-employees{
            width: 800px;
            max-width: 100%;

                
            -webkit-box-shadow: 0px -1px 8px 0px rgba(0,0,0,0.75);
             -moz-box-shadow: 0px -1px 8px 0px rgba(0,0,0,0.75);
             box-shadow: 0px -1px 8px 0px rgba(0,0,0,0.75);
            
            

            .company-name{
                width: 800px;
                height: 3rem;
                font-size: 20px;
                display: flex;
                justify-content: center;
                align-items: center ;
            }
        }

    }

`