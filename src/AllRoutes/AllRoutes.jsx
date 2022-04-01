import {  Route, Routes } from "react-router-dom"

import { Home } from "../Pages/Home/Home"
import { HomeWithUser } from "../Pages/HomeWithUser/HomeWithUser"
import { LearningForTeams } from "../Pages/Products/LearningForTeams"
import {DevelopmentsTeam} from "../Pages/Solutions/DevelopmentsTeam/DevelopmentsTeam"
import {TeamPricing} from "../Pages/TeamPricing/Components/team"

export const AllRoutes = ()=>{
    return(
        <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/business-pricing" element={<TeamPricing/>}/>
            <Route path="/learn" element={<HomeWithUser/>}/>
            <Route path="/upskill" element={<LearningForTeams/>}/>
            <Route path="/business" element={<DevelopmentsTeam/>}/>
            <Route path = "*" element={"404 Page not Found"}/>
        </Routes>
    )
}