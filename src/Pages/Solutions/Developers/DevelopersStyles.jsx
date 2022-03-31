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