import styled from "styled-components";

export const Blocks = styled.div`
  height: 900px;
  width: 100%;
  background-color: #f7f8fd;

  .bg {
    height: 700px;
    width: 94%;
    margin: auto;
    /* border: 1px solid #000; */
    display: flex;
    gap: 20px;
  }

  .first {
    height: 400px;
    width: 30%;
    /* border: 1px solid teal; */
    margin-left: 2.5em;
    margin-top: 6em;
    border-radius: 8px 8px 8px 8px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
      0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
      0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
  }

  .second {
    height: 400px;
    width: 30%;
    /* border: 1px solid teal; */
    border-radius: 8px 8px 8px 8px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
      0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
      0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
  }

  .third {
    margin-top: 6em;
    height: 400px;
    width: 30%;
    /* border: 1px solid teal; */
    border-radius: 8px 8px 8px 8px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
      0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
      0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
  }

  .text1 {
    height: 218px;
    width: 100%;
  }
`;

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
  .image {
    height: 350px;
    width: 40%;
    /* border: 1px solid teal; */
  }
  img {
    margin-top: 1em;
    margin-left: 1.5em;
  }
  .paragraph {
    height: 350px;
    width: 50%;
    /* border: 1px solid tomato; */
  }

  .paragraph h1 {
    text-align: left;
    margin-top: 3em;
  }

  .paragraph p {
    text-align: left;
    font-size: 16px;
  }
`;
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

  .firstDiv {
    height: 800px;
    width: 60%;
    /* border: 1px solid tomato; */
  }

  .secondDiv {
    height: 800px;
    width: 40%;
    /* border: 1px solid teal; */
  }

  .text-top {
    height: 300px;
    width: 80%;
    /* border: 1px solid yellow; */
    margin-left: 5em;
  }

  .banner-img {
    height: 500px;
    width: 100%;
    /* border: 1px solid green; */
  }

  img {
    margin-top: 1em;
    margin-left: 7em;
  }
  .background {
    height: 550px;
    width: 75%;
    /* border: 1px solid black; */
    margin: auto;
    margin-top: 2em;
  }
`;
export const Block4 = styled.div`
  height: 1200px;
  width: 100%;
  background-color: #f7f8fd;

  .boxes {
    height: 900px;
    width: 80%;
    /* border: 1px solid black; */
    margin: auto;
    display: grid;
    grid-template-columns: auto auto auto;
  }

  .thumbnail-box {
    height: 400px;
    width: 90%;
    /* border: 1px solid teal; */
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
      0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
      0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
    margin-left: 1em;
  }

  .poster {
    height: 180px;
    width: 100%;
    /* border: 1px solid yellow; */
  }
  .message {
    height: 130px;
    width: 100%;
    /* border: 1px solid yellow; */
    background-color: white;
  }
  .btn {
    height: 85px;
    width: 100%;
    /* border: 1px solid yellow; */
    display: flex;
    background-color: white;
  }

  .left {
    height: 85px;
    width: 50%;
    /* border: 1px solid green; */
    background-color: white;
  }
  .right {
    height: 85px;
    width: 50%;
    /* border: 1px solid green; */
    background-color: white;
  }
  Button:hover {
    background-color: #f7f8fd;
  }

  Button {
    margin-top: 2.5em;
    margin-left: 1em;
  }

  .beginner {
    margin-left: 0;
    margin-top: 2em;
  }
`;

export const Block5 = styled.div`
  height: 800px;
  width: 100%;
  background-color: #fff;

  .navy {
    height: 450px;
    width: 80%;
    /* border: 1px solid black; */
    margin: auto;
    display: flex;
    gap: 15px;
  }

  .blue-navy {
    height: 380px;
    width: 50%;
    /* border: 1px solid teal; */
    background-color: #202033;
  }
  .btn {
    height: 85px;
    width: 100%;
    /* border: 1px solid yellow; */
    display: flex;
    background-color: #202033;
  }
  .left {
    height: 85px;
    width: 50%;
    /* border: 1px solid green; */
    background-color: #202033;
  }
  .right {
    height: 85px;
    width: 50%;
    /* border: 1px solid green; */
    background-color: #202033;
  }
  .message {
    height: 130px;
    width: 100%;
    /* border: 1px solid yellow; */
    background-color: #202033;
  }
  Button:hover {
    background-color: #4c4c64;
    color: black;
  }

  /* Button{
        margin-top: 2.5em;
        margin-left: 1em;
        
    } */
`;

export const Block6 = styled.div`
  height: 800px;
  width: 100%;
  background-color: #fff;
`;

export const Pricing = styled.div`
  height: 1200px;
  width: 100%;
  background-color: #f7f8fd;

  #box {
    width: 100%;
    height: 220px;
    text-align: center;
    margin-top: 0%;
  }
  #box > h1 {
    font-size: 40px;
    font-weight: 540;
  }
  #para {
    font-size: 23px;
  }
  #para2 {
    width: 100%;
    font-size: 22px;
    margin-top: 20px;
    background-color: #fff7a3;
  }
  #box2 {
    width: 80%;
    height: 1050px;

    margin: auto;
    display: flex;
    margin-top: 40px;
  }
  #box2 > div {
    width: 32%;
    height: 100%;
    margin-left: 2%;
  }
  #line1 {
    width: 100%;
    height: 6px;
    background-color: #5651f6;
  }
  .price1 {
    width: 100%;
    height: 60px;
    margin-left: 5%;
  }
  .price2 {
    width: 100%;
    height: 280px;
  }
  .top {
    text-align: center;
    font-weight: 450;
  }
  .top22 {
    text-align: center;
    font-weight: 450;
    color: #b59432;
  }
  .dollar {
    margin-left: 10%;
    font-weight: 100;
    margin-top: 3%;
    font-size: 17px;
    text-decoration: line-through;
  }
  .mid {
    margin-left: 5%;
  }
  .top1 {
    margin-left: 14%;
    font-weight: 50;
    margin-top: -4%;
    font-size: 15px;
  }
  .top2 {
    margin-left: 17%;
    font-weight: 50;
    margin-top: -4%;
    color: grey;
    font-size: 17px;
  }
  .real1 {
    margin-left: 10%;
    margin-top: -4%;
    font-size: 30px;
    font-weight: 540;
    color: blue;
  }
  .img_size {
    width: 30px;
    height: 13px;
    margin-top: 3%;
    font-weight: 40;
  }
  .butt4 {
    margin-left: 40px;
    /* border:1px black; */
    margin-top: 4%;
  }
  .buy1 {
    padding: 15px 100px;
    font-size: 15px;
    background-color: white;
    color: black;
    /* border: 1px lightslategrey */
  }
  .buy1:hover {
    background-color: #5651f6;
    color: white;
    border: none;
  }
  .top3 {
    margin-left: 18%;
    font-weight: 450;
    font-size: 14px;
    text-decoration: underline;
  }
  .top4 {
    margin-left: 6%;
    font-weight: 450;
    margin-top: 6%;
    font-size: 15px;
  }
  .price3 {
    width: 100%;
    margin-top: -10%;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
    margin-left: 5px;
  }
  #save {
    margin-left: 3%;
    background-color: lightskyblue;
    font-size: 13px;
  }
  #save1 {
    margin-left: 3%;
    background-color: yellow;
    font-size: 13px;
  }
  #gift {
    margin-top: 17%;
    /* box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;; */
  }
  #tech {
    width: 100%;
    height: 300px;

    text-align: center;
  }
  #text {
    font-size: 20px;
    margin-top: 5%;
    color: blue;
    text-decoration: underline;
  }
  #need {
    width: 90%;
    height: 300px;

    margin: auto;
    display: flex;
  }
  #need > div {
    width: 31%;
    height: 100%;

    margin-left: 2%;
    text-align: center;
  }
  #certificates {
    text-align: center;
    width: 100%;
    height: 500px;

    display: flex;
  }
  #certificates_img {
    width: 40%;
    height: 350px;

    margin-left: 6%;
    margin-top: 4%;
  }
  #text6 {
    width: 40%;
    height: 350px;
    text-align: center;

    margin-top: 4%;
    margin-left: 7%;
  }
  #text7 {
    font-size: 20px;
  }
`;
