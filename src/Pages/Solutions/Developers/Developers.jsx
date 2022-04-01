import React from "react";
import { Typography, Button } from "@mui/material";
import { Main } from "../DevelopmentsTeam/DevelopmentStyles";
import { Blocks,Block2, Block3, Block4, Block5, Block6 } from "./DevelopersStyles";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Part4} from '../../Home/Components/Part4'

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
                src="https://i.ibb.co/nsQFd7V/Capture.jpg"
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
      <Block2>
        <h1 style={{fontSize: "40px"}}>The Educative Difference</h1>
        <div className="container">
          <div className="image">
            <img src="https://i.ibb.co/6XJzmJ8/Capture.jpg" alt="" />
          </div>
          <div className="paragraph">
            <h1>Better than videos</h1>
            <p>Reading is faster than watching: The average tutorial is spoken at 150 words per minute. You can read at 250. That's why our courses are laid out as rich text and interactive experience so you learn more, learn faster, and learn exactly what you need.</p>
          </div>
        </div>
      </Block2>

      <Block3>
        <div className="mainDiv">
          <div className="firstDiv">
            <div className="text-top">
              <h1 style={{textAlign:"left"}}>Slick coding environments</h1>
              <p style={{textAlign:"left", fontSize: "16px"}}>Have your team practice as they learn with full-fledged code playgrounds inside their browsers.</p>
              <img src="https://i.ibb.co/LnfcgDH/Capture.jpg" alt="" />
            </div>
            <div className="banner-img">
              <img src="https://i.ibb.co/dWWfNrH/Capture.jpg" alt="" />
            </div>
          </div>
          <div className="secondDiv">
            <iframe width="70%" height="600px" src="https://player.vimeo.com/video/694984651?h=9d005915dd?autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&quality=720p" style={{marginLeft: "2em", marginTop: "3em"}} allowtransparency = "true" frameBorder="0"  title="myFrame">
            </iframe>
          </div>
        </div>
      </Block3>
      <Block4>
        <br /><br />
         <h1 style={{fontSize: "40px"}}>Stop scrolling. Start coding.</h1>
         <p>Kick off your new skillset with these free courses.</p>
         <div className="boxes">
           <div className="thumbnail-box">
             <div className="poster">
               <img src="https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=620/v2api/collection/10370001/6255385826033664/image/6449088230326272" height="180px" width="100%" alt="" />
             </div>
             <div className="message">
             <p style={{textAlign: "left", fontSize:"16px", marginLeft:"0.5em"}}>Educative</p>
               <h2 style={{textAlign: "left", fontSize: "22px", marginLeft:"0.5em"}}>Getting Started with Braintree API</h2>
             </div>
             <div className="btn">
               <div className="left">
                 <img className="beginner" src="https://i.ibb.co/gMSvwH4/Capture.jpg" alt="" />
               </div>
               <div className="right">
               <Button size="large" style={{color: 'black'}} variant="text">Get Started <ArrowForwardIcon/></Button>
               </div>
             </div>
           </div>
           <div className="thumbnail-box">
           <div className="poster">
               <img src="https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=620/v2api/collection/10370001/6602565607751680/image/5334640753115136" height="180px" width="100%" alt="" />
             </div>
             <div className="message">
             <p style={{textAlign: "left", fontSize:"16px", marginLeft:"0.5em"}}>Educative</p>
               <h2 style={{textAlign: "left", fontSize: "22px", marginLeft:"0.5em"}}>Integration With Stripe API</h2>
             </div>
             <div className="btn">
               <div className="left">
                 <img className="beginner" src="https://i.ibb.co/gMSvwH4/Capture.jpg" alt="" />
               </div>
               <div className="right">
               <Button size="large" style={{color: 'black'}} variant="text">Get Started <ArrowForwardIcon/></Button>
               </div>
             </div>
           </div>
           <div className="thumbnail-box">
           <div className="poster">
               <img src="https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=620/v2api/collection/10370001/5311748804444160/image/6425570306949120" height="180px" width="100%" alt="" />
             </div>
             <div className="message">
             <p style={{textAlign: "left", fontSize:"16px", marginLeft:"0.5em"}}>Educative</p>
               <h2 style={{textAlign: "left", fontSize: "22px", marginLeft:"0.5em"}}>Learn Perl from Scratch</h2>
             </div>
             <div className="btn">
               <div className="left">
                 <img className="beginner" src="https://i.ibb.co/gMSvwH4/Capture.jpg" alt="" />
               </div>
               <div className="right">
               <Button size="large" style={{color: 'black'}} variant="text">Get Started <ArrowForwardIcon/></Button>
               </div>
             </div>
           </div>
           <div className="thumbnail-box">
           <div className="poster">
               <img src="https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=620/v2api/collection/10370001/5998644794228736/image/5169180325707776" height="180px" width="100%" alt="" />
             </div>
             <div className="message">
             <p style={{textAlign: "left", fontSize:"16px", marginLeft:"0.5em"}}>Educative</p>
               <h2 style={{textAlign: "left", fontSize: "22px", marginLeft:"0.5em"}}>Getting Started with Braintree APIIntegrate Auth0 with Java Servlet Application</h2>
             </div>
             <div className="btn">
               <div className="left">
                 <img className="beginner" src="https://i.ibb.co/gMSvwH4/Capture.jpg" alt="" />
               </div>
               <div className="right">
               <Button size="large" style={{color: 'black'}} variant="text">Get Started <ArrowForwardIcon/></Button>
               </div>
             </div>
           </div>
           <div className="thumbnail-box">
           <div className="poster">
               <img src="https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=620/v2api/collection/6007291671740416/4771380858454016/image/5568181303771136" height="180px" width="100%" alt="" />
             </div>
             <div className="message">
             <p style={{textAlign: "left", fontSize:"16px", marginLeft:"0.5em"}}>Educative</p>
               <h2 style={{textAlign: "left", fontSize: "22px", marginLeft:"0.5em"}}>Getting Started with Algolia API</h2>
             </div>
             <div className="btn">
               <div className="left">
                 <img className="beginner" src="https://i.ibb.co/gMSvwH4/Capture.jpg" alt="" />
               </div>
               <div className="right">
               <Button size="large"  style={{color: 'black'}} variant="text">Get Started <ArrowForwardIcon/></Button>
               </div>
             </div>
           </div>
           <div className="thumbnail-box">
           <div className="poster">
               <img src="https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=620/v2api/collection/10370001/6504987440447488/image/5698297090539520" height="180px" width="100%" alt="" />
             </div>
             <div className="message">
             <p style={{textAlign: "left", fontSize:"16px", marginLeft:"0.5em"}}>Educative</p>
               <h2 style={{textAlign: "left", fontSize: "22px", marginLeft:"0.5em"}}>Build a Custom Membership Website with Velo by Wix</h2>
             </div>
             <div className="btn">
               <div className="left">
                 <img className="beginner" src="https://i.ibb.co/gMSvwH4/Capture.jpg" alt="" />
               </div>
               <div className="right">
               <Button size="large" style={{color: 'black'}} variant="text">Get Started <ArrowForwardIcon/></Button>
               </div>
             </div>
           </div>
         </div>
      </Block4>
      <Block5>
        <br /><br /><br />
          <h1>Curated Paths</h1>
          <p>Go in-depth and become a subject matter expert <br/> with our hand-picked, curated content.</p>
          <div className="navy">
            <div className="blue-navy">
            <div className="poster">
               <img src="https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=620/v2api/collection/10370001/4520963650617344/image/6250713683853312" height="180px" width="100%" alt="" />
             </div>
             <div className="message">
             <p style={{textAlign: "left", fontSize:"16px", marginLeft:"0.5em", color:"white"}}>Python for Programmers</p>
               <h2 style={{textAlign: "left", fontSize: "15px", marginLeft:"0.5em", color:"white"}}>Python is an essential language for developers and data scientists alike. Expand your job opportunities with lessons designed for current developers like you.</h2>
             </div>
             <div className="btn">
               <div className="left">
                 {/* <img className="beginner" src="https://i.ibb.co/gMSvwH4/Capture.jpg" alt="" /> */}
               </div>
               <div className="right">
               <Button size="large" style={{color: 'white', border: '1px solid white'}} variant="outlined" >Get Started <ArrowForwardIcon/></Button>
               </div>
             </div>
            </div>
            <div className="blue-navy">

            <div className="poster">
               <img src="https://i.ibb.co/fH43JSd/Capture.jpg" height="180px" width="100%" alt="" />
             </div>
             <div className="message">
             <p style={{textAlign: "left", fontSize:"16px", marginLeft:"0.5em", color:"white"}}>Become a Machine Learning Engineer</p>
               <h2 style={{textAlign: "left", fontSize: "15px", marginLeft:"0.5em", color:"white"}}>Add machine learning to your skillset and equip yourself to push the boundaries of AI technology. Get the hands-on practice you'll need to land a job in ML.</h2>
             </div>
             <div className="btn">
               <div className="left">
                 {/* <img className="beginner" src="https://i.ibb.co/gMSvwH4/Capture.jpg" alt="" /> */}
               </div>
               <div className="right">
               <Button size="large" variant="outlined" style={{color: 'white', border: '1px solid white'}} >Get Started <ArrowForwardIcon/></Button>
               </div>
             </div>

            </div>
            <div className="blue-navy">

            <div className="poster">
               <img src="https://i.ibb.co/0q5KHcB/Capture.jpg" height="180px" width="100%" alt="" />
             </div>
             <div className="message">
             <p style={{textAlign: "left", fontSize:"16px", marginLeft:"0.5em", color:"white"}}>C++ for Programmers
              </p>
               <h2 style={{textAlign: "left", fontSize: "15px", marginLeft:"0.5em", color:"white"}}>Learn C++ from scratch, and get a handle on one of the most popular programming languages in the world.</h2>
             </div>
             <div className="btn">
               <div className="left">
                 {/* <img className="beginner" src="https://i.ibb.co/gMSvwH4/Capture.jpg" alt="" /> */}
               </div>
               <div className="right">
               <Button size="large" style={{color: 'white', border: '1px solid white'}} variant="outlined" >Get Started <ArrowForwardIcon/></Button>
               </div>
             </div>

            </div>
          </div>
      </Block5>
      <Block6>
        <Part4/>
      </Block6>
    </Main>
  );
};
