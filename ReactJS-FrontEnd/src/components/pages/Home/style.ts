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
            border: solid var(--purple) 0.1px;
            
            select{
                font-size: 18px;
                width: 26rem;
                height: 3rem;
                border: solid 1px var(--blue);
                background-color: var(--purple);
                color: var(--white);
                font-weight: bold;
            }
            

            .list-title{
                margin-left: 20px;
               
            }

        }
    
    }

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


`