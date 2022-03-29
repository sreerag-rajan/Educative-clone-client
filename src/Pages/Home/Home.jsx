import "./Home.css"
import { Part1 } from "./Components/Part1"
import { Part2 } from "./Components/Part2"
import { Part3 } from "./Components/Part3"
import { Part4 } from "./Components/Part4"

export const Home = ()=>{
    
    return (
        <div className="home">
            <Part1/>
            <Part2/>
            <Part3/>
            <Part4/>
        </div>
    )
}