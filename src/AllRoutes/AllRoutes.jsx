import {  Route, Routes } from "react-router-dom"
import { Home } from "../Pages/Home/Home"
import { LearningForTeams } from "../Pages/Products/LearningForTeams"


export const AllRoutes = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/upskill" element={<LearningForTeams/>}/>
            <Route path = "*" element={"404 Page not Found"}/>
        </Routes>
    )
}