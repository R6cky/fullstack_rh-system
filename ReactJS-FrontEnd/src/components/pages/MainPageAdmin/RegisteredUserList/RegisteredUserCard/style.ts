import styled from "styled-components";

export const StyleRegisteredUserCard = styled.li`
width: 350px;
max-width: 100%;
height: 150px;
border-radius: 10px;
padding: 10px;
display: flex;
justify-content: space-between;
align-items: center;
margin: 10px 0;

-webkit-box-shadow: 0px -1px 8px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px -1px 8px 0px rgba(0,0,0,0.75);
box-shadow: 0px -1px 8px 0px rgba(0,0,0,0.75);


.left-data{
    width: 11rem;
    max-width: 100%;
    border: solid 1px var(--blue);
    border-radius: 8px;
    padding: 5px;
}

.right-data{
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: solid 1px var(--blue);
    border-radius: 8px;
    padding: 5px;

    span{
        cursor: pointer;
    }
}

`