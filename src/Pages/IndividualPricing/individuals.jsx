import "./individualPricing.css"
import { Top } from "./top"
import {Pricing } from "./pricing"
import { Tech} from "./tech"
import { Desc} from "./description"
import { Certificate} from "./certificates"
export const IndividualPricing = ()=>{
    return (
        <div>
            <Top/>
            <Pricing/>
            <Tech/>
            <Desc/>
            <Certificate/>
            

        </div>
    )
}