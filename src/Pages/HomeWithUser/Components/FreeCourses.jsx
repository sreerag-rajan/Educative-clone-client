import "../HomeWithUser.css"
import { Button, Paper, Box } from "@mui/material";
import { useEffect, useState } from "react"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



export const FreeCourses = (courses)=>{
    const [freeCourses, setFreeCourses] = useState([]);
    const[coursesToShow, setCoursesToShow] = useState([]);
    const [page, setPage]= useState(1);
    const [sectionHeight, setSectionHeight] = useState(800);

    //Use Effect to get all the free courses from courses
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

    //Use effect to try for limit number of free courses based on pagination
    useEffect(()=>{
        let index_limit = page*6;
        let x = freeCourses.filter((el,i)=>{
            if(i<index_limit){
                console.log(index_limit, i)
                return el;
            }
        })
        setCoursesToShow(x);
    },[page, freeCourses])

    useEffect(()=>{
        setSectionHeight(page*900);
    },[page])
    

    return(
        <div className="freeCourses" >
            <div style={{height:`${sectionHeight}px`}} className="freeCourseContainer">
            {coursesToShow.map((el)=>{
                return <Paper sx={{padding: "10px"}} className={"freeCourseCard"} key={el.id} variant="outlined">
                    <div>
                        <img className="courseImage" src={el.imageUrl} alt="" />
                    </div>
                    <div>
                        <p>{el.instructorAvatar&&<img className="instructorAvatar" src={el.instructorAvatar} alt="instructor Avatar"/>}{el.courseBy}</p>
                        <h3>{el.courseName}</h3>
                    </div>
                    <div className="flex">
                        <div>{el.level}</div>
                        <div><Button vairant="outlined">Preview <ArrowForwardIcon/> </Button></div>
                    </div>
                    </Paper>
                
            })}
            </div>
            <div className="showMoreDiv">
            {coursesToShow.length<freeCourses.length?<Button sx={{border: "1px solid gray"}} onClick={()=>{
                setPage(page+1)
            }}>Show More</Button>:<Button sx={{border: "1px solid gray"}} onClick={()=>{
                setPage(1)
            }}>COllapse</Button>}
            </div>
        </div>
    )
}