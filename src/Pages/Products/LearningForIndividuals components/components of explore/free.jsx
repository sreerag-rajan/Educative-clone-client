import { ImgMediaCard } from "../blueprintOfCard";
import { useEffect, useState } from "react";

export const Free = ({course}) => {

  const [freeCourses, setFreeCourses] = useState([]);
    
  useEffect(() => {
    let arr = [...course,course]
    let x = arr.filter((el) => {
      if(el.coursetype === "Free"){
        return el;
      }
    })
    setFreeCourses(x)
    console.log("freeCourses",freeCourses)
  },[])


  return (
    <>
      {freeCourses.map((e) => {
        return <ImgMediaCard key={e.key} imageUrl={e.imageUrl} courseBy={e.courseBy} courseName={e.courseName} level={e.level} />
      })}
    </>
  )
}