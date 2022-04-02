import { Button } from "@mui/material"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

export const Price = ({course})=>{
    const price = useRef(Math.floor(Math.random()*10))
    const navigate = useNavigate()

    const handleClick = ()=>{
        let x = {...course, amount:price.current};
        console.log(x);
        localStorage.setItem("coursePayment", JSON.stringify(x));
        navigate("/payment");

    }
    return(
        <div className="price">
            <div>
                <img src={course.imageUrl} alt="poster" />
            </div>
            <h3>Annual Plan</h3>
            <p >{course.level}</p>
            <div>
                <p> <b> ${price.current} / month </b></p>

            </div>
            <Button onClick={handleClick} variant="contained">Start Learning</Button>
        </div>
    )
}