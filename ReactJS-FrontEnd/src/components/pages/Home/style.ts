import styled from "styled-components";

export const StyleHome = styled.div`

    width: 100%;
    height: 100%;

    .container-data{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin: 20px auto;
       

        .container-data-left{
            width: 400px;
           
        }
    
        .container-data-right{
            
            select{
                font-size: 18px;
                width: 26rem;
                height: 3rem;
                border: solid 1px var(--blue);
            }
            

            .list-title{
                margin-left: 20px;
               
            }

            

            -webkit-box-shadow: 0px -1px 8px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px -1px 8px 0px rgba(0,0,0,0.75);
            box-shadow: 0px -1px 8px 0px rgba(0,0,0,0.75);
        }
    
    }

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


`