import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { CourseOverview } from "./Components/CourseOverview";
import { HowYouLearn } from "./Components/HowYouLearn";
import { Price } from "./Components/Price";
import { QuickNumbers } from "./Components/QuickNumbers";
import { SomeDetails } from "./Components/SomeDetails";
import "./Course.css"

export const Course = ()=>{
    const [course, setCourse] = useState(JSON.parse(localStorage.getItem("educativeCourse")));
    

    return(
        <div className="course">
            <div>
                <h1>{course.courseName}</h1>
                <QuickNumbers/>
                <CourseOverview/>
                <SomeDetails course={course}/>
                <HowYouLearn/>
            </div>
            <div>
                <Price course={course}/>
                <div className="trainYourTeam">
                <Button variant="outlined">Train your Team</Button>
                </div>
                
            </div>
        </div>
    )
}