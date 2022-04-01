import { useRef } from "react"


export const QuickNumbers = ()=>{
    const lessons = useRef(Math.floor(Math.random()*20)+2)
    const quizzes = useRef(Math.floor(Math.random()*10)+2)
    const playgrounds = useRef(Math.floor(Math.random()*10)+2)
    const illustrations = useRef(Math.floor(Math.random()*20)+2)
    return(
        <div className="quickNumbers">
            <div>{lessons.current} Lessons</div>
            <div>{quizzes.current} Quizzes</div>
            <div>{playgrounds.current} Playgrounds</div>
            <div>{illustrations.current} illustrations</div>
        </div>
    )
}