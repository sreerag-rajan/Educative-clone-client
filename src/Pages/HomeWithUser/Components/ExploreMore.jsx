import {Button} from "@mui/material"
import { useNavigate } from "react-router-dom"

export const ExploreMore = ()=>{
    const navigate = useNavigate()
    return(
        <div className="exploreMore">
            <h2>Take your skills to the next level</h2>
            <Button onClick={()=>{
                navigate("/explore")
            }} variant="contained">Explore all Courses & Paths</Button>
        </div>
    )
}