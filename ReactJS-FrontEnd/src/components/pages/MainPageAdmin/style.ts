import styled from "styled-components";

export const StyleMainPageAdmin = styled.div`

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
        border: solid 1px var(--blue);
        border-radius: 4px;
        font-size: 1.2rem;
        

        
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
    .redirect-link{

        
        :visited{
            color: black;
        }

        
    }
    }

    .admin-page-container{
        width: 100%;
        max-width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap:20px;
        align-items: center;

        .select-company{
            width: 800px;
            height: 70px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            max-width: 100%;
            

            select{
                width: 300px;
                height: 45px;
                background-color: var(--blue);
                color: white;
                font-weight: bold;
                font-size: 16px;
            }

        }

        .header-departments{
            width: 800px;
            max-width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            -webkit-box-shadow: 0px 1px 5px -3px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 1px 5px -3px rgba(0,0,0,0.75);
            box-shadow: 0px 1px 5px -3px rgba(0,0,0,0.75);

            .title-header-departments{
                margin-left: 5px;
              
            }

            .btn-create-department{
                width: 7rem;
                height: 2.5rem;
                border: solid 1px var(--blue);
                color: var(--blue);
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 8px;
                cursor: pointer;
                margin-right: 5px;
                font-size: 18px;
                font-weight: bold;
            }
        }
    }

`