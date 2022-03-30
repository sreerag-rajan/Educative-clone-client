import { useState, useEffect } from "react";

export const PopularCourses = (courses)=>{
    //Setting States
    const [interviewCourses,setInterviewCourses] = useState([]);
    const [javascriptCourses, setJavascriptCourses] = useState([])
    const [pythonCourses, setPythonCourses] = useState([]);
    
    //UseEffect to filter and get interview Courses
    useEffect(()=>{
        let x = courses.courses.filter((el)=>{
            if(el.subject==="Interview") return el;
        })
        setInterviewCourses(x);
    },[])
    

    //UseEffect to filter and get Javascript Courses
    useEffect(()=>{
        let x = courses.courses.filter((el)=>{
            if(el.subject==="Javascript") return el;
        })
        setJavascriptCourses(x);
    },[])

    //UseEffect to filter and get Python Courses
    useEffect(()=>{
        let x = courses.courses.filter((el)=>{
            if(el.subject==="Python") return el;
        })
        setPythonCourses(x);
    },[])
    return(
        <div></div>
    )
}