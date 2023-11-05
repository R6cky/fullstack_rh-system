import styled from "styled-components";

export const StyleMainPageUser = styled.div`

    width: 100%;
    height: 100vh;
    

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
                text-decoration: none;
                

                .logout-button{
                    width:100px;
                    height: 30px;
                    color: black;
                    text-decoration: none;
                    display: flex;
                    justify-content: center;
                    
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

    .user-page-container{
        border: solid green 3px;
        width: 100%;
        max-width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap:20px;
        align-items: center;


        .userdata-area{
            border: solid brown;
            width: 100%;
            height: 10  0px;
            display: flex;
            justify-content: center;
            align-items: center;

            .user-data{
                border: solid;
                width: 800px;

            }
        }





        .data-employees{
            border: solid rosybrown;
            width: 800px;
            max-width: 100%;
            
            

            .company-name{
                width: 800px;
                height: 3rem;
                display: flex;
                justify-content: center;
                align-items: center ;
            }
        }

    }

`