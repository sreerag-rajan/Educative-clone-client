import { ImgMediaCard } from "../blueprintOfCard";


export const OurPicks = ({course}) => {

    

    console.log("course123",course)
      return (
        <>
          {course.map((e) => {
            return <ImgMediaCard key={e.key} imageUrl={e.imageUrl} courseBy={e.courseBy} courseName={e.courseName} level={e.level} />
          })}
        </>
      )
      
}