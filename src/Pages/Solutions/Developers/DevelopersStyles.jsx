import styled from 'styled-components'

export const Blocks = styled.div`
    height: 900px;
    width: 100%;
    background-color: #f7f8fd;

    .bg{
        height: 700px;
        width: 94%;
        margin: auto;
        /* border: 1px solid #000; */
        display: flex;
        gap: 20px;
    }

    .first{
        height: 400px;
        width: 30%;
        /* border: 1px solid teal; */
        margin-left: 2.5em;
        margin-top: 6em;
        border-radius: 8px 8px 8px 8px;
        box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07),
                0 16px 32px rgba(0,0,0,0.07), 
                0 32px 64px rgba(0,0,0,0.07);
    }

    .second{
        height: 400px;
        width: 30%;
        /* border: 1px solid teal; */
        border-radius: 8px 8px 8px 8px;
        box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07),
                0 16px 32px rgba(0,0,0,0.07), 
                0 32px 64px rgba(0,0,0,0.07);
    }

    .third{
        margin-top: 6em;
        height: 400px;
        width: 30%;
        /* border: 1px solid teal; */
        border-radius: 8px 8px 8px 8px;
        box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07),
                0 16px 32px rgba(0,0,0,0.07), 
                0 32px 64px rgba(0,0,0,0.07);
    }

    .text1{
      height: 218px;
      width: 100%;
  }
`

export const Block2 = styled.div`
    height: 600px;
    width: 100%;
    background-color: #fff;

    .container {
        height: 350px;
        width: 80%;
        /* border: 1px solid #000; */
        margin: auto;
        display: flex;
        gap: 3em;
    }
    .image{
        height: 350px;
        width: 40%;
        /* border: 1px solid teal; */
    }
    img{
        margin-top: 1em;
        margin-left: 1.5em;
    }
    .paragraph{
        height: 350px;
        width: 50%;
        /* border: 1px solid tomato; */
    }

    .paragraph h1{
        text-align: left;
        margin-top: 3em;
    }

    .paragraph p{
        text-align: left;
        font-size: 16px;
    }
`
export const Block3 = styled.div`
    height: 800px;
    width: 100%;
    background-color: #fff;

    .mainDiv {
        height: 800px;
        width: 80%;
        /* border: 1px solid #000; */
        display: flex;
        margin: 0 auto;
    }

    .firstDiv{
        height:800px;
        width: 60%;
        /* border: 1px solid tomato; */
    }

    .secondDiv{
        height:800px;
        width: 40%;
        /* border: 1px solid teal; */
    }

    .text-top{
        height:300px;
        width: 80%;
        /* border: 1px solid yellow; */
        margin-left: 5em;
    }

    .banner-img{
        height:500px;
        width: 100%;
        /* border: 1px solid green; */
    }

    img{
        margin-top: 1em;
        margin-left: 7em;
    }
    .background{
        height: 550px;
        width: 75%;
        /* border: 1px solid black; */
        margin: auto;
        margin-top:2em;
    }
`
export const Block4 = styled.div`
    height: 1200px;
    width: 100%;
    background-color: #f7f8fd;

    .boxes{
        height: 900px;
        width: 80%;
        /* border: 1px solid black; */
        margin: auto;
        display: grid;
        grid-template-columns: auto auto auto;
        
    }

    .thumbnail-box{
        height: 400px;
        width: 90%;
        /* border: 1px solid teal; */
        box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07),
                0 16px 32px rgba(0,0,0,0.07), 
                0 32px 64px rgba(0,0,0,0.07);
        margin-left: 1em;
    }

    .poster{
        height: 180px;
        width: 100%;
        /* border: 1px solid yellow; */
    }
    .message{
        height: 130px;
        width: 100%;
        /* border: 1px solid yellow; */
        background-color: white;
    }
    .btn{
        height: 85px;
        width: 100%;
        /* border: 1px solid yellow; */
        display: flex;
        background-color: white;
    }

    .left{
        height: 85px;
        width: 50%;
        /* border: 1px solid green; */
        background-color: white;
        
    }
    .right{
        height: 85px;
        width: 50%;
        /* border: 1px solid green; */
        background-color: white;
    }
    Button:hover{
        background-color: #f7f8fd
    }

    Button{
        margin-top: 2.5em;
        margin-left: 1em;
    }

    .beginner{
        margin-left: 0;
        margin-top: 2em;
    }
`

export const Block5 = styled.div`
    height: 800px;
    width: 100%;
    background-color: #fff;
    

    .navy{
        height: 450px;
        width: 80%;
        /* border: 1px solid black; */
        margin: auto;
        display: flex;
        gap: 15px;
    }

    .blue-navy{
        height: 380px;
        width: 50%;
        /* border: 1px solid teal; */
        background-color: #202033;
    }
    .btn{
        height: 85px;
        width: 100%;
        /* border: 1px solid yellow; */
        display: flex;
        background-color: #202033;
    }
    .left{
        height: 85px;
        width: 50%;
        /* border: 1px solid green; */
        background-color: #202033;
    }
    .right{
        height: 85px;
        width: 50%;
        /* border: 1px solid green; */
        background-color: #202033;
    }
    .message{
        height: 130px;
        width: 100%;
        /* border: 1px solid yellow; */
        background-color: #202033;
    }
    Button:hover{
        background-color: #4c4c64;
        color: black;
    }

    /* Button{
        margin-top: 2.5em;
        margin-left: 1em;
        
    } */
`

export const Block6 = styled.div`
    height: 800px;
    width: 100%;
    background-color: #fff;
`