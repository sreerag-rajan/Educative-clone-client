import { ImgMediaCard } from "../blueprintOfCard";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import "./browseAll.css";

export const BrowseAll = ({course}) => {
  const [freeCourses, setFreeCourses] = useState([]);
  const[coursesToShow, setCoursesToShow] = useState([])
  const [page, setPage]= useState(1);

  useEffect(() => {
    setFreeCourses(course);
  })


  useEffect(()=>{
    let index_limit = page*6;
    let x = freeCourses.filter((el,i)=>{
        if(i<index_limit){
          return el;
        }
    })
    setCoursesToShow(x);
  },[page, freeCourses])


const sorting = (e) => {
  setCoursesToShow(course)
  if(e !== "All"){
    let s = course.filter((el) => {
      if(el.subject === e){
        return el;
      }
    })
    setCoursesToShow(s);
  }
  console.log(coursesToShow)
}


  return (
    <>
    <div className="buttons">
        <button className="btns" onClick={() => {sorting("All")}}>All</button>
        <button className="btns" onClick={() => {sorting("Python")}}>Python</button>
        <button className="btns" onClick={() => {sorting("Java")}}>Java</button>
        <button className="btns" onClick={() => {sorting("Javascript")}}>Javascript</button>
        <button className="btns" onClick={() => {sorting("Ruby")}}>Ruby</button>
        <button className="btns" onClick={() => {sorting("C++")}}>C++</button>
        <button className="btns" onClick={() => {sorting("PHP")}}>PHP</button>
    </div>
      <div className="grid-container">
        {coursesToShow.map((e) => {
          return <ImgMediaCard key={e.key} imageUrl={e.imageUrl} courseBy={e.courseBy} courseName={e.courseName} level={e.level} e={e}/>
        })}
      </div>
      <div className="showmore">
            <Button variant="outlined" onClick={() => {
              setPage(page+1)
            }} >Show More</Button>
        </div>
    </>
  )
}