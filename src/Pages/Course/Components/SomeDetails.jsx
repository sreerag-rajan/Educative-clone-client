import { Avatar } from "@mui/material"


export const SomeDetails = ({course})=>{
    return(
        <div className="someDetails">
            <div>
            <b>Course Level:</b> <span className="sd">{course.level}</span>
            </div>
            <div>
                <b>Course By:</b> <span className="sd"> {course.instructorAvatar&& <Avatar className="user" alt="Remy Sharp" src={course.instructorAvatar} /> } {course.courseBy}</span>
            </div>
            <div>
                <b>Subject:</b><span className="sd">{course.subject}</span>
            </div>
            
        </div>
    )
}