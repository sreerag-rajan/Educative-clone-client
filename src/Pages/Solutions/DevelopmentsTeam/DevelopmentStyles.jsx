import styled from "styled-components";

export const Main = styled.div`
  h1 {
    text-align: center;
  }
  p {
    font-size: 21px;
    text-align: center;
  }
`;
export const SecondBox = styled.div`
  height: 750px;
  width: 100%;
  background-color: #f7f8fd;

  .box {
    height: 500px;
    width: 100%;
    display: flex;
  }
  .box .left {
    height: 700px;
    width: 45%;
  }
  .box .right {
    height: 500px;
    width: 55%;
  }
  .right .container {
    height: 500px;
    width: 90%;
  }
  .container #head {
    width: 100%;
    height: 70px;
    margin-top: 2em;
    color: #2e2e40;
  }
`;

export const ThirdBox = styled.div`
  height: 400px;
  width: 100%;
  background-color: #f7f8fd;
  display: flex;

  .box2 {
    width: 88%;
    height: 400px;
    margin: auto;
    display: flex;
  }
`;

export const ForthBox = styled.div`
  height: 750px;
  width: 100%;
  background-color: white;

  .box3 {
    width: 80%;
    height: 450px;
    margin: auto;
    /* border: 1px solid black; */
    
  }

  .reviews {
    overflow-x: hidden;
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    margin: auto;
    margin-left: 1em;
  }
  .reviews > div {
    /*<- this is the slideshow element*/
    width: 100%;
    margin: auto;
    /* border: 1px solid black; */
    padding: 40px;
  }
  .review {
    /* background-color: aqua; */
    padding: 20px;
    /* border: 1px solid gray; */
    margin: 10px;
    margin-left: 10%;
    width: 400px;
    height: 450px;
    text-align: left;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    background-color: white;
    outline: none;
    border: none;
  }
  .review p,
  h3 {
    padding: 5px 8px;
    text-align: left;
    font-size: 16px
  }

  .review > div:nth-child(2) {
    position: fixed;
    bottom: 10px;
  }
`;

export const FifthBox = styled.div`
  height: 1100px;
  width: 100%;
  background-color: #f7f8fd;

  .thumbnail{
      height: 500px;
      width: 70%;
      /* border: 1px solid black; */
      margin: auto;
      display: flex;
  }
  .sub-thumbnail{
      width: 48%;
      height: 450px;
      /* border: 1px solid tomato; */
      margin: auto;
      gap: 20px;
      border-radius: 0px 0px 10px 10px;
      box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07),
                0 16px 32px rgba(0,0,0,0.07), 
                0 32px 64px rgba(0,0,0,0.07);
  }

  .image{
      height: 225px;
      width: 100%;
  }

  .text{
      height: 225px;
      width: 100%;
  }
  Button{
      color: black;
      border: 1px solid #bebfc2;
      border-radius: 0px;
      width: 200px;
      margin-left: 0.7em;
  }
  Button:hover{
      border: 1px solid black;
  }
  .thumbnail1{
        height: 250px;
        width: 70%;
        /* border: 1px solid black; */
        margin: auto;
        display: flex;
        box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07),
                0 16px 32px rgba(0,0,0,0.07), 
                0 32px 64px rgba(0,0,0,0.07);
  }
  .banner{
      height: 250px;
      width: 52%;
      /* border: 1px solid tomato; */
  }
  .texting{
      height: 250px;
      width: 48%;
  }
`;