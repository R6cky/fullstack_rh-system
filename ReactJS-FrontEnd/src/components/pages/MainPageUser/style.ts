import styled from "styled-components";

export const StyleMainPageUser = styled.div`

    width: 100%;
    height: 100vh;
    

    .header-default-page{
        border-bottom: solid var(--purple) 0.1px;
        border-radius: 5px;
        width: 100%;
        max-width: 90%;
        height: 5rem;
        display: flex;
        justify-content: space-between;
        padding: 0px 50px;
        align-items: center;
        margin-bottom: 50px;
    }


        .buttons-right-area{
            width: 300px;
            display: flex;
            justify-content: space-around;
            align-items: center;
                

                button{
                width: 9rem;
                height: 3rem;
                border: none;
                border-radius: 4px;
                font-size: 1.2rem;
                color: var(--purple);

                :visited{
                    color: var(--purple);
                }
                :hover:nth-child(1) {
                    text-decoration: none;
                    border-bottom: 3px solid var(--purple);
                    padding-bottom: 0px;
                    color: var(--purple);
                }
                
                background: none;
                font-weight: bold;
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