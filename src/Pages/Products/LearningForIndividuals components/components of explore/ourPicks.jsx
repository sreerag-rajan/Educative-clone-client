import { ImgMediaCard } from "../blueprintOfCard";
import { useEffect, useState } from "react";

export const OurPicks = ({course}) => {

  const [freeCourses, setFreeCourses] = useState([]);
    
  useEffect(() => {
    let arr = [...course,course]
    let x = arr.filter((el) => {
      if(el.coursetype === "Our Picks"){
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