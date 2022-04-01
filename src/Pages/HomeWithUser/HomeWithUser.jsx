import axios from "axios";
import { useEffect, useState } from "react"
import { ExploreMore } from "./Components/ExploreMore"
import { FreeCourses } from "./Components/FreeCourses";
import { PopularCourses } from "./Components/PopularCourses";
import { Welcome } from "./Components/Welcome"


export const HomeWithUser = ()=>{
    const [courses,setCourses] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:2345/homecourses").then(({data})=>{
            setCourses(data);
        })
    },[])
    return(
        <div className="homeWithUser">
            <Welcome/>
            {courses.length>0?<FreeCourses courses={courses}/>:""}
            {courses.length>0?<PopularCourses courses={courses}/>:""}
            <ExploreMore/>
        </div>
    )
}