import {  Route, Routes } from "react-router-dom"
import { Home } from "../Pages/Home/Home"
import { HomeWithUser } from "../Pages/HomeWithUser/HomeWithUser"


export const AllRoutes = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/learn" element={<HomeWithUser/>}/>
            <Route path = "*" element={"404 Page not Found"}/>
        </Routes>
    )
}