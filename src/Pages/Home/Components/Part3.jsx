import leftImage from "../../../Assets/Home/part3leftimg.png"
import righttImage from "../../../Assets/Home/part3rightimg.png"
import {Button } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export const Part3 = ()=>{
    return(
        <div className="part3">
            <h1>Inspired by and developed for Engineers like you</h1>
            <div  className="part3grid">
                <div>
                    <img src={leftImage} alt="" />
                    <h2>Software Engineers</h2>
                    <p>We’re engineers, too. We know what it’s like to stare at code and want to get better. That’s why we started the company -- to help developers like you reach full potential.</p>
                    <Button sx={{border:"1px solid grey"}}><span style={{color:"black"}}> See How</span> <ArrowForwardIcon/></Button>
                </div>
                <div >
                    <img src={righttImage} alt="" />
                    <h2>Engineering Managers and Executives</h2>
                    <p>Whether you’re building a new team or scaling the one you already have, we’ll help you reduce institutional knowledge and get everyone contributing to production-ready code faster.</p>
                    <Button sx={{border:"1px solid grey"}}><span style={{color:"black"}}>See How</span> <ArrowForwardIcon/></Button>
                </div>
            </div>
        </div>
    )
}