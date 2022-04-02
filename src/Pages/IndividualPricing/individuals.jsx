import "./individualPricing.css"
import { Top } from "./top"
import {Pricing } from "./pricing"
import { Tech} from "./tech"
import { Desc} from "./description"
import { Certificate} from "./certificates"
import {Demo} from "../TeamPricing/Components/Demo"
export const IndividualPricing = ()=>{
    return (
        <div>
            <Top/>
            <Pricing/>
            <Tech/>
            <Desc/>
            <Certificate/>
            <Demo/>
            

        </div>
    )
}