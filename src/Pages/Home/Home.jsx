import "./Home.css"
import { Part1 } from "./Components/Part1"
import { Part2 } from "./Components/Part2"
import { Part3 } from "./Components/Part3"
import { Part4 } from "./Components/Part4"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { useEffect } from "react"
import { loginUser } from "../../Redux/Auth/auth.action"

export const Home = ()=>{
    const user = useSelector((store)=>store.auth.user);
    const dispatch = useDispatch()
    useEffect(()=>{
        let x = JSON.parse(localStorage.getItem("educativeUser"))
        dispatch(loginUser(x));
    },[])

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