import Button from '@mui/material/Button';
import image1 from "../../Assets/Products/teamImage1.png";
import "./LearningForTeams components/LearningForTeams.css";
import Card1 from "./LearningForTeams components/Card1"
import Card2 from "./LearningForTeams components/Card2"
import Card3 from "./LearningForTeams components/Card3"
import image2 from "../../Assets/Products/image2.PNG";
import image3 from "../../Assets/Products/image3.PNG";
import image4 from "../../Assets/Products/image4.PNG";
import image5 from "../../Assets/Products/image5.PNG";

export const LearningForTeams = ()=>{

    return (
        <div>
            <p className="upskill-your-team">Upskill Your Team. <br />
                Improve Their Code and Career.</p>
            <p className='educative-helps'>Educative helps engineering managers and their teams learn, practice,<br />
and test their coding skills using hands-on, interactive tools right from their internet browser.</p>
            <div><Button className="demo-btn" variant="contained"><p>Request a Demo</p></Button></div>
           <div className="Image1">
           <img className="copyImage1" src={image1} alt="" />
           </div>
            <div className="card-background">
                <p className="how-we">How we help</p>
            <div className="Card">
                <Card1 />
                <Card2 />
                <Card3 />
            </div>
            </div>

            <div className="flexdiv">
                <div className="firstflex">
                    <div>
                        <p className="heading1" >Custom Learning Paths</p>
                        <p className="para1">No two engineers are exactly the same, so why is their <br/>
                        curriculum? Educative helps you customize their training and <br/>
                        paths so each engineer on your team gets exactly what they <br/>
                        need and skip what they've already mastered. <br/>
                        </p>
                    </div>
                    <div className="images">
                        <img src={image2} alt="" width="100%" height="100%"/>
                    </div>
                </div>
                <div className="firstflex">
                    <div className="images">
                        <img src={image3} alt="" width="100%" height="100%" />
                    </div>
                    <div>
                        <p className="heading1" >Custom Learning Paths</p>
                        <p className="para1">No two engineers are exactly the same, so why is their <br/>
                        curriculum? Educative helps you customize their training and <br/>
                        paths so each engineer on your team gets exactly what they <br/>
                        need and skip what they've already mastered. <br/>
                        </p>
                    </div>
                    
                </div>
                <div className="firstflex">
                    <div>
                        <p className="heading1" >Custom Learning Paths</p>
                        <p className="para1">No two engineers are exactly the same, so why is their <br/>
                        curriculum? Educative helps you customize their training and <br/>
                        paths so each engineer on your team gets exactly what they <br/>
                        need and skip what they've already mastered. <br/>
                        </p>
                    </div>
                    <div className="images">
                        <img src={image4} alt="" width="100%" height="100%" />
                    </div>
                </div>
            </div>

            <div className="postbox">
                <div className="postbox1">
                    <div>
                        <img src={image5} alt="" width="100%" height="100%" />
                    </div>
                    <div>
                        <div className="ptag">
                            <p>
                            Ready for a demo?
                            </p>
                            <p>
                            See Educative in action to learn how the power of <br/>
                            developer experiences can push your team faster and <br/>
                            farther than ever before.
                            </p>
                            <Button id="last-btn" className="demo-btn" variant="contained">Request a Demo</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}