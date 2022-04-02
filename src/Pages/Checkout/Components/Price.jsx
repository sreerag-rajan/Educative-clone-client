import { dividerClasses } from "@mui/material"
import { useEffect, useRef, useState } from "react";
import styled from "styled-components"


export const Price = ({course})=>{
    const twoYearPrice = useRef((course.amount*0.84).toFixed(2))
    const annualPrice = useRef(course.amount);
    const monthlyPrice = useRef(course.amount*(Math.floor(Math.random()*10)+1)+2)
    const [selectedPlan, setSelectedPlan] = useState(2);
    const [total,setTotal] = useState(0);

    useEffect(()=>{
        if(selectedPlan===1){
            setTotal(Math.ceil(twoYearPrice.current*24))
        }
        else if(selectedPlan===2){
            setTotal(Math.ceil(annualPrice.current*12));
        }
        else{
            setTotal(monthlyPrice.current);
        }
    },[selectedPlan])

     

    const handleDivClick = (value)=>{
        setSelectedPlan(value);
    }
    return(
        <div className="priceComponent">
            <h4>Choose a Plan</h4>
            <div className="priceContainer">
                {selectedPlan===1?<div className="eachPriceSelected">
                    <div className="eachpricetitleDiv">16% Discount</div>
                    <div className="eachPriceInfoDiv">
                        <p><b>2-Year Plan</b></p>
                        <p>${twoYearPrice.current} / month</p>
                    </div>
                </div>:<div onClick={()=>(handleDivClick(1))} className="eachPrice">
                    <div className="eachpricetitleDiv">16% Discount</div>
                    <div className="eachPriceInfoDiv">
                        <p><b>2-Year Plan</b></p>
                        <p>${twoYearPrice.current} / month</p>
                    </div>
                </div>}


                {selectedPlan===2?<div className="eachPriceSelected">
                    <div className="eachpricetitleDiv2">Most Popular</div>
                    <div className="eachPriceInfoDiv">
                        <p><b>Annual Plan</b></p>
                        <p>${annualPrice.current} / month</p>
                    </div>
                </div>:<div onClick={()=>(handleDivClick(2))} className="eachPrice">
                    <div className="eachpricetitleDiv2">Most Popular</div>
                    <div className="eachPriceInfoDiv">
                        <p><b>Annual Plan</b></p>
                        <p>${annualPrice.current} / month</p>
                    </div>
                </div>}


                {selectedPlan===3?<div className={"eachPriceSelected"}>
                    <div className="eachPriceInfoDiv">
                        <p><b>Monthly Plan</b></p>
                        <p>${monthlyPrice.current} / month</p>
                    </div>
                </div>:<div onClick={()=>(handleDivClick(3))} className="eachPrice">
                    <div className="eachPriceInfoDiv">
                        <p><b>Monthly Plan</b></p>
                        <p>${monthlyPrice.current} / month</p>
                    </div>
                </div>}
            </div>

            <hr />
            <div className="totalPrice">
                Total: ${total}
            </div>
            <hr />
        </div>
    )
}