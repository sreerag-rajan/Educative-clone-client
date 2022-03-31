import React from "react";
import { Typography, Button } from "@mui/material";
import { Main } from "../DevelopmentsTeam/DevelopmentStyles";
import { Blocks } from "./DevelopersStyles";

export const Developers = () => {
  return (
    <Main>
      <h1>Your future starts here.</h1>
      <p>World-class courses for world-class software developers</p>
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
        <br />
        <img src="https://i.ibb.co/SnPBDms/Capture.jpg" alt="" />
      </Typography>

      <Blocks>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>How we help</h1>
        <br />
        <br />
        <br />
        {/* <div>
                <img src="https://i.ibb.co/3hXDz51/Capture.jpg" alt="" style={{marginLeft:"1em"}} />
            </div> */}
        <div className="bg">
          <div className="first">
            <div className="image">
              <img
                src="https://i.ibb.co/F6G9cqz/Capture.jpg"
                alt=""
                height="155px"
                width="100%"
              />
            </div>
            <div style={{backgroundColor: "white"}}>
            <div className="text1">
              <h2 style={{ textAlign: "left", marginLeft: "0.5em" }}>
              Shake the rust
              </h2>
              <p
                style={{
                  textAlign: "left",
                  marginLeft: "0.7em",
                  fontSize: "16px",
                }}
              >
                Has it been a while since you used a certain skill? We hear that a lot. Our hands-on courses help you practice right in your browser, so you'll sharpen those skills in no time.
              </p>
            </div>
            </div>
          </div>
          <div className="second">
          <div className="image">
              <img
                src="https://i.ibb.co/z4kVqW1/Capture.jpg"
                alt=""
                height="155px"
                width="100%"
              />
            </div>
            <div style={{backgroundColor: "white"}}>
            <div className="text1">
              <h2 style={{ textAlign: "left", marginLeft: "0.5em" }}>
              Interview prep
              </h2>
              <p
                style={{
                  textAlign: "left",
                  marginLeft: "0.7em",
                  fontSize: "16px",
                }}
              >
                Land your dream job. We can help whether you're days or weeks away from your next technical interview. Our customers now work at FAANG and Fortune500 companies around the world.
              </p>
            </div>
            </div>
          </div>
          <div className="third">
          <div className="image">
              <img
                src="https://i.ibb.co/F6G9cqz/Capture.jpg"
                alt=""
                height="155px"
                width="100%"
              />
            </div>
            <div style={{backgroundColor: "white"}}>
            <div className="text1">
              <h2 style={{ textAlign: "left", marginLeft: "0.5em" }}>
              Grow your career
              </h2>
              <p
                style={{
                  textAlign: "left",
                  marginLeft: "0.7em",
                  fontSize: "16px",
                }}
              >
                95% of engineers want to learn a new skill each year. Join them and accelerate your growth with our interactive experiences that help you test, learn, and grow.
              </p>
            </div>
            </div>
          </div>
        </div>
      </Blocks>
    </Main>
  );
};
