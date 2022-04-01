import "./individual.css"
import { Demo } from "./Demo"
import { FAQ } from "./FAQ"
import { Logos } from "./Logos"
import { Pricing } from "./Pricing"
import { Top } from "./Top"
export const TeamPricing = ()=>{
    return (
        <div>
            <Top/>
            <Pricing/>
            <Logos/>
            <FAQ/>
            <Demo/>
        </div>
    )
}