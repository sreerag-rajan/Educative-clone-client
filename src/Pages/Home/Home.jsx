import "./Home.css"
import { Part1 } from "./Components/Part1"
import { Part2 } from "./Components/Part2"
import { Part3 } from "./Components/Part3"
import { Part4 } from "./Components/Part4"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const Home = ()=>{
    const user = useSelector((store)=>store.auth.user);

    if(user){
        return <Navigate to={"/learn"}/>
    }
    
    return (
        <div className="home">
            <Part1/>
            <Part2/>
            <Part3/>
            <div className="part4fromhome">
            <Part4/>
            </div>
            
        </div>
    )
}