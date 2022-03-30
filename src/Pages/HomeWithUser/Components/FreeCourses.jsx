import { useEffect, useState } from "react"


export const FreeCourses = (courses)=>{
    const [freeCourses, setFreeCourses] = useState([]);

    useEffect(()=>{
        if(courses.courses.length!==0){
            let arr = [...courses.courses]
        let x = arr.filter((el)=>{
            if(el.isFree){
                return el;
            }
        })
        setFreeCourses(x);
        }    
    },[])
    return(
        <div></div>
    )
}