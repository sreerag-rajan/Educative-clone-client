import {  Route, Routes } from "react-router-dom"

import { LearningForIndividuals } from "../Pages/Products/LearningForIndividuals"
import { Home } from "../Pages/Home/Home"
import { HomeWithUser } from "../Pages/HomeWithUser/HomeWithUser"
import { LearningForTeams } from "../Pages/Products/LearningForTeams"
import {DevelopmentsTeam} from "../Pages/Solutions/DevelopmentsTeam/DevelopmentsTeam"
import {TeamPricing} from "../Pages/TeamPricing/Components/team"
import { Course } from "../Pages/Course/Course"
import { Checkout } from "../Pages/Checkout/Checkout"

export const AllRoutes = ()=>{
    return(
        <Routes>

            <Route path="/" element={<Home/>}/>

            <Route path="/explore" element={<LearningForIndividuals/>}/>
            <Route path="/business-pricing" element={<TeamPricing/>}/>
            <Route path="/learn" element={<HomeWithUser/>}/>
            <Route path="/upskill" element={<LearningForTeams/>}/>
            <Route path="/business" element={<DevelopmentsTeam/>}/>
            <Route path="/course/:name" element={<Course/>}/>
            <Route path = "/payment" element={<Checkout/>}/>
            <Route path = "*" element={"404 Page not Found"}/>
        </Routes>
    )
}