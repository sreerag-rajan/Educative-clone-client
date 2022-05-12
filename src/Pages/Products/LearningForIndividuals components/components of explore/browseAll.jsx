import { ImgMediaCard } from "../blueprintOfCard";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import "./browseAll.css";
import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export const BrowseAll = ({course}) => {
  const [freeCourses, setFreeCourses] = useState([]);
  const[coursesToShow, setCoursesToShow] = useState([])
  const [page, setPage]= useState(1);
  const [search, setSearch] = useState("");

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
  let index_limit = page*6;
    let x = freeCourses.filter((el,i)=>{
        if(i<index_limit){
          return el;
        }
    })
    setCoursesToShow(x);
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

function handleSubmit(){
  let x = freeCourses.filter((el) => {
    return el.courseName.toLowerCase() === search.toLowerCase() || el.subject.toLowerCase() === search.toLowerCase();
  })
  setCoursesToShow(x);
}

  return (
    <>
    {/* search bar */}
    <div className="searchbar">
        <div><TextField onChange={(e) => setSearch(e.target.value)} fullWidth label="Search Courses by Course Name or Programming Language" id="fullWidth" /></div>
        <div><Button onClick={handleSubmit} id="searchButton12" variant="contained" startIcon={<SearchOutlinedIcon style={{ fontSize: 30 }} />}>Search</Button></div>
    </div>
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