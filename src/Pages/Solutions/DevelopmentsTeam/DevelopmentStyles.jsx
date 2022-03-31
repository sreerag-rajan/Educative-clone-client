import styled from 'styled-components'

export const Main = styled.div`
    h1{
        text-align: center;
    }
    p{
        font-size: 21px;
        text-align: center;
    }
`
export const SecondBox = styled.div`
    height: 800px;
    width: 100%;
    background-color: #f7f8fd;

    .box{
        height: 500px;
        width: 100%;
        display: flex;
    }
    .box .left{
        height: 500px;
        width: 45%;
    }
    .box .right{
        height: 500px;
        width: 55%;
        border: 1px solid black;
    }
    .right .container{
        height: 500px;
        width: 90%;
        border: 1px solid teal;
    }

    
`