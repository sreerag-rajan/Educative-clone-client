import React from "react";
import { Typography, Button } from "@mui/material";
import { Main, SecondBox, ThirdBox, ForthBox, FifthBox  } from "./DevelopmentStyles";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import {Paper} from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';


export const DevelopmentsTeam = () => {
  const reviews = [
    {
      review:
        "You guys are the gold standard of crash-courses... Narrow enough that it doesn't need years of study or a full blown book to get the gist, but broad enough that an afternoon of Googling doesn't cut it.",
      author: "Carlos Matias La Borde",
      handle: "Software Developer",
    },
    {
      review:
        "Just finished my first full #ML course: Machine learning for Software Engineers from Educative, Inc. ... Highly recommend!",
      author: "Evan Dunbar",
      handle: "ML Engineer",
    },
    {
      review:
        "I spend my days and nights on Educative. It is indispensable. It is such a unique and reader-friendly site, resources available for learners on Educative is well organized and deep, it helps break down tricky programming concepts into simple chunks and exercises for practice to solidify the learning experience.",
      author: "Souvik Kundu",
      handle: "Front-end Developer",
    },
    {
      review:
        "I've tried probably 5-7 different sites and Educative is easily the best. It perfectly blends explanation with interactivity ... On other sites like Codecademy, I often feel like they're asking me to do such a specific task to build such a specific product that if I were to move on to building my own from scratch, I'd be lost. I don't feel like that at all with Educative. Bravo!”",
      author: "Eric Downs",
      handle: "Musician/Entrepeneur",
    },
    {
      review:
        "Thank you for finally making such a platform, where I can just read the useful information and execute the code for a challenge and get real hands-on experience without watching videos for hours.",
      author: "Kenan Eyvazov",
      handle: "DevOps Engineer",
    },
    {
      review:
        "I would like to express my immense gratitude for making your versatile educational platform available and accessible. I have been using educative.io since February and it will be fair to say that everything I know about software development/CS fundamentals (especially in context of technical interviews) is because of your platform.",
      author: "Saad Aleem",
      handle: "Software Engineer, Google",
    },
    {
      review:
        "These are high-quality courses. Trust me. I own around 10 and the price is worth it for the content quality. @EducativeInc came at the right time in my career. I'm understanding topics better than with any book or online video tutorial I've done. Truly made for developers. Thanks https://t.co/EeKruv5hxM",
      author: "Anthony Walker",
      handle: "@_webarchitect_",
    },
    {
      review:
        "I highly appreciate the professional work of the Educative team. Their goal is simple: make the perfect course for their students.",
      author: "Rainer Grimm",
      handle: "Software architect and Instructor",
    },
    {
      review:
        "A rich yet very easy to use platform, a wonderful team and a true opportunity to make a difference by sharing my skills - couldn't have asked for better!",
      author: "Samia Khalid",
      handle: "Senior AI Engineer at Microsoft",
    },
    {
      review:
        "Their platform has allowed me to help a broader audience of learners. I look forward to working with them again in the future!",
      author: "Vincent Russo",
      handle: "Security software developer running LucidProgramming",
    },
    {
      review:
        "Their platform has allowed me to help a broader audience of learners. I look forward to working with them again in the future!",
      author: "Vincent Russo",
      handle: "Security software developer running LucidProgramming",
    },
    {
      review:
        "An interactive and in-browser embedded coding environment, that's just perfect. I believe this to be a very effective medium for learning a skill such as coding.",
      author: "Ohans Emannuel",
      handle: "UI designer & Lead Front End Dev @kudi.ai",
    }
  ];

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
                <h1 style={{ textAlign: "left" }}>
                  Introducing Educative Onboarding
                </h1>
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
                <h1 style={{ textAlign: "left" }}>
                  The Classic: Educative Learning
                </h1>
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
        <h1 style={{ textAlign: "center", fontSize: "38px" }}>
          What other learners are saying
        </h1>
        <br />
        <div className="box3">
                {/* <button>&#60;</button> */}
                <div className="reviews">
                    <Slide cssClass="reviewSlideshow" autoplay={false}  slidesToShow={2}>
                    {reviews.map((el,i)=>{
                        return <Paper elevation={6}  className='review' key={i}>
                            <div>
                            <FormatQuoteIcon/>
                            <p style={{padding: "5px 20px"}}>{el.review}</p>
                            </div>                        
                            <div>
                                <h3>{el.author}</h3>
                                <p>{el.handle}</p>
                            </div> 
                        </Paper>
                    })}
                    </Slide>
                </div>

                {/* <button>&#62;</button> */}

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
    </Main>
  );
};
