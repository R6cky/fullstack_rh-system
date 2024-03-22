import styled from "styled-components";

export const StyleMainPageAdmin = styled.div`

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


        .logout-button{
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
            margin-top: 20px;
            

            select{
                width: 300px;
                max-width: 100%;
                height: 45px;
                background-color: var(--purple);
                color: white;
                font-weight: bold;
                font-size: 16px;
                border: none;
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
                border:none;
                background: var(--purple);
                color: var(--white);
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