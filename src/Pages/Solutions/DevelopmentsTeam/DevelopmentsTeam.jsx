import React from "react";
import { Typography,Button } from "@mui/material";
import { Main,SecondBox } from "./DevelopmentStyles";

export const DevelopmentsTeam = () => {
  return (
    <Main>
      <div>
        <h1>Start new developers.<br/>Keep the ones you already have.</h1>
        <p>
          Help new hires contribute to code faster. Retain your best employees
          longer.
          <br />
          Scale your team, accelerate your deliverables, and be the hero of your
          organization.
        </p>
        <Typography align="center">
          <Button
            color="primary"
            size="large"
            variant="contained"
            style={{width: "300px", height: "50px"}}
          >
            Start a free trial
          </Button>
            <br/>
          <img src="https://i.ibb.co/pXBns79/banner.jpg" alt="" />
          <br/>
          <img src="https://i.ibb.co/YhRqGtf/logos.jpg" alt="" />
        </Typography>
      </div>  
      <SecondBox>
      <br /><br /><br /><br /><br /><br /><br />
      <h1>The Full Educative Experience.</h1>
      <div class="box">
          <div class="left">
              <img style={{marginTop: "1em", marginLeft: "5em"}} src="https://i.ibb.co/k5SgdDV/left.jpg" alt="" />
          </div>
          <div class="right">
              <img style={{marginTop: "1em", marginLeft: "0"}} src="https://i.ibb.co/rfV2Fp3/right.jpg" alt="" />
          </div>
      </div>
      </SecondBox>
    </Main>
  );
};
