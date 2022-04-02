import React from "react";
import { Typography, Button } from "@mui/material";
import { Main, SecondBox, ThirdBox, ForthBox, FifthBox, SixthBox } from "./DevelopmentStyles";
import 'react-slideshow-image/dist/styles.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import {Part4} from '../../Home/Components/Part4'

export const DevelopmentsTeam = () => {

  return (
    <Main>
      <div>
        <h1>
          Start new developers.
          <br />
          Keep the ones you already have.
        </h1>
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
            style={{ width: "300px", height: "50px" }}
          >
            Start a free trial
          </Button>
          <br />
          <img src="https://i.ibb.co/pXBns79/banner.jpg" alt="" />
          <br />
          <img src="https://i.ibb.co/YhRqGtf/logos.jpg" alt="" />
        </Typography>
      </div>
      <SecondBox>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>The Full Educative Experience.</h1>
        <div className="box">
          <div className="left">
            <img
              style={{ marginTop: "1em", marginLeft: "5em" }}
              src="https://i.ibb.co/k5SgdDV/left.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <div className="container">
              <div id="head">
                
              </div>
              <div id="sub-head">
                <p
                  style={{
                    fontSize: "19px",
                    textAlign: "left",
                    color: "#2e2e40",
                    marginTop: "0.3em",
                  }}
                >
                  The clock is ticking on your team. The average tenure of a
                  software engineer is just 2 years. Help them contribute to
                  code faster and keep them longer by leveraging best practices
                </p>
              </div>
              <div id="points">
                <img src="https://i.ibb.co/fDncmSD/Capture1.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </SecondBox>
      <ThirdBox>
        <div class="box2">
          <div className="right">
            <div className="left-container">
              <div id="head">
                
              </div>
              <div id="sub-head">
                <p
                  style={{
                    fontSize: "19px",
                    textAlign: "left",
                    color: "#2e2e40",
                    marginTop: "0.3em",
                  }}
                >
                  Access to our world-class catalog of 300 hands-on, interactive
                  courses that help software engineers learn by doing, not
                  watching. Nothing to configure. Explore the new courses added
                  each week
                </p>
              </div>
              <div id="points">
                <img src="https://i.ibb.co/LxZ3Gqh/Capture.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="left">
            <img
              style={{ marginTop: "1em", marginLeft: "5em" }}
              src="https://i.ibb.co/sKJzn1Y/Capture1.jpg"
              alt=""
            />
          </div>
        </div>
      </ThirdBox>
      
      <ForthBox>
        <br />
        <br />
        <br />
        {/* <h1 style={{ textAlign: "center", fontSize: "38px" }}>
          What other learners are saying
        </h1> */}
        <br />
        <div className="box3">
                <Part4/>
            </div>
      </ForthBox>
      <FifthBox>
        <br/>
        <h1 style={{ textAlign: "center", fontSize: "38px" }}>
        Resources
        </h1>
        <p style={{ textAlign: "center", fontSize: "25px" }}>Read more about onboarding and retaining your team</p>
        <div className="thumbnail">
          <div className="sub-thumbnail">
            <div className="image">
              <img src="https://i.ibb.co/26hKBkM/Capture.jpg" alt="" height="225px" width="100%" />
            </div>
            <div className="text">
              <h2 style={{ textAlign: "left", marginLeft: "0.5em"}}>5 tips for technical interviews</h2>
              <p style={{ textAlign: "left", marginLeft: "0.7em", fontSize: "16px"}}>Conducting technical interviews can feel chaotic, but it doesn't have to. Learn the essentials for conducing great interviews.</p>
              <Button variant="outlined" size="large">Read the Blog &nbsp;<ArrowForwardIcon/></Button>
            </div>
          </div>
          <div className="sub-thumbnail">
          <div className="image">
          <img src="https://i.ibb.co/1ztGZWK/Capture.jpg" alt="" height="225px" width="100%" />
          </div>
            <div className="text">
            <h2 style={{ textAlign: "left", marginLeft: "0.5em"}}>How-to manage distributed teams</h2>
              <p style={{ textAlign: "left", marginLeft: "0.7em", fontSize: "16px"}}>You're working remote. They're working remote. Learn the essentials to successfully manage a distributed team.</p>
              <br/>
              <Button variant="outlined" size="large">Read the Blog &nbsp;<ArrowForwardIcon/></Button>
            </div>
          </div>
        </div>
        <br/>
        <div className="thumbnail1">
          <div className="banner">
            <img src="https://i.ibb.co/0jR10qp/Capture.jpg" alt="" height="250px" width="100%" />
          </div>
          <div className="texting">
              <h2 style={{ textAlign: "left", marginLeft: "0.5em"}}>Create a great onboarding</h2>
              <p style={{ textAlign: "left", marginLeft: "0.7em", fontSize: "16px"}}>First impressions matter. Help your new engineers contribute to code faster and settle into their new role with this ebook.</p>
              <Button style={{width: "300px"}} variant="outlined" size="large">Download the Whitepaper &nbsp;<DownloadIcon/></Button>
            </div>
        </div>
      </FifthBox>
      
      <SixthBox>
        <br /><br /><br /><br /><br />
      <div className="thumbnail1">
          <div className="banner">
            <img src="https://i.ibb.co/KLvXmsy/capture2.jpg" alt="" height="300px" width="100%" />
          </div>
          <div className="texting">
              <h2 style={{ textAlign: "left", marginLeft: "0.5em"}}>Ready for a demo?</h2>
              <p style={{ textAlign: "left", marginLeft: "1em", fontSize: "18px"}}>See Educative in action to learn how the power of developer experiences can push your team faster and farther than ever before.</p>
              <Button style={{marginLeft:"1em"}} variant="contained" size="large">Request Demo</Button>
            </div>
        </div>
      </SixthBox>
    </Main>
  );
};
