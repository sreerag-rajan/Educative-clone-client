import "./Checkout.css"
import { Text } from "./Components/Text"
import {useRef} from "react"
import { Price } from "../Checkout/Components/Price"
import { Payment } from "./Components/Payment"

export const Checkout = ()=>{
    const course = useRef(JSON.parse(localStorage.getItem("coursePayment")))
    return(
        <div className="checkout">
            <div>
                <Text/>
            </div>
            <div className="checkoutRight">
                <Price course = {course.current}/>
                <Payment course = {course.current}/>
            </div>
        </div>
    )
}