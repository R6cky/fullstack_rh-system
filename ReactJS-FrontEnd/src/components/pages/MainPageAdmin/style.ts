import styled from "styled-components";

export const StyleMainPageAdmin = styled.div`

    .header-default-page{
            border: solid;
            width: 100%;
            height: 80px;
            display: flex;
            justify-content: space-around;
            align-items: center;
    }


        .buttons-right-area{
                border: solid red;
                width: 300px;
                display: flex;
                justify-content: space-around;
                align-items: center;
        }

    .admin-page-container{
        border: solid green 3px;
        width: 100%;
        max-width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap:20px;
        align-items: center;

        .select-company{
            border: solid yellow;
            width: 800px;
            height: 70px;
            display: flex;
            justify-content: flex-end;
            align-items: center;

            select{
                width: 200px;
                height: 30px;
                
            }

        }

        .header-departments{
            border: solid red;
            width: 800px;
            max-width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .title-header-departments{
                margin-left: 5px;
            }

            .btn-create-department{
                cursor: pointer;
                margin-right: 5px;
            }
        }
    }

`