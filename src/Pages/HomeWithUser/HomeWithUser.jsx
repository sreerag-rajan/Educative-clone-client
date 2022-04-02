import axios from "axios";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { loginUser } from "../../Redux/Auth/auth.action";
import { ExploreMore } from "./Components/ExploreMore"
import { FreeCourses } from "./Components/FreeCourses";
import { PopularCourses } from "./Components/PopularCourses";
import { Welcome } from "./Components/Welcome"


export const HomeWithUser = ()=>{
    const [courses,setCourses] = useState([]);
    const user = useSelector((store)=>store.auth.user);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        let x = JSON.parse(localStorage.getItem("educativeUser"))
        dispatch(loginUser(x));
    },[])

    useEffect(()=>{
        axios.get("https://educative-clone-server.herokuapp.com/homecourses").then(({data})=>{
            setCourses(data);
        })
    },[])

    if(!user){
        navigate("/")
    }


    return(
        <div className="homeWithUser">
            <Welcome/>
            {courses.length>0?<FreeCourses courses={courses}/>:""}
            {courses.length>0?<PopularCourses courses={courses}/>:""}
            <ExploreMore/>
        </div>
    )
}