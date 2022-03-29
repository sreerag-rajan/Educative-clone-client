import {  Route, Routes } from "react-router-dom"
import { Home } from "../Pages/Home/Home"


export const AllRoutes = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path = "*" element={"404 Page not Found"}/>
        </Routes>
    )
}