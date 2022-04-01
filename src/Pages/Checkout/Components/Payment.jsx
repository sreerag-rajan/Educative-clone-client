import { Button, CircularProgress } from "@mui/material"
import { alignProperty } from "@mui/material/styles/cssUtils"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



export const Payment = ({course})=>{
    const [formData, setFormData] = useState({
        cardNumber: "",
        expirationDate:"",
        cvv:""
    })
    const [cardNumberError, setCardNumberError] = useState(false)
    const [expirationDateError, setexpirationDateError] = useState(false)
    const [cvvError, setcvvError] = useState(false)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);

    const handleChange = (e)=>{
        const {name, value} = e.target
        setFormData({...formData, [name]:value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        if(formData.cardNumber.trim().split(" ").join("").length!==16){
            setCardNumberError(true);
        }
        else{
            setCardNumberError(false);

        }
        if(formData.expirationDate<Date.now()){
            setexpirationDateError(true)
        }
        else{
            setexpirationDateError(false)
        }
        if(formData.cvv.trim().length!==3){
            setcvvError(true);
        }
        else{
            setcvvError(false);
            
        }
        if(cardNumberError===false&&expirationDateError===false&&cvvError===false){
            setLoading(true);
            setTimeout(()=>{
                alert("Payment Successful");
            
            let x = course.courseName.split(" ").join("-")
            navigate(`/course/${x}`)
            },1500)
            
        }

    }
    return(
        <div className="paymentComponent">
            {loading?<CircularProgress/>:<div>
            <div>
                <h4>Pay With Card:</h4>
                <div>
                    {/* <svg width="40" height="24"><use xlink:href="#icon-visa"></use></svg>
                    <svg width="40" height="24"><use xlink:href="#icon-master-card"></use></svg>
                    <svg width="40" height="24"><use xlink:href="#icon-american-express"></use></svg>
                    <svg width="40" height="24"><use xlink:href="#icon-jcb"></use></svg>
                    <svg width="40" height="24"><use xlink:href="#icon-discover"></use></svg> */}
                </div>
            </div>
            <div>
                <form >
                    <div> <label htmlFor="cardNumber">Card Number</label></div>
                    <input onChange={handleChange} type="text" name="cardNumber" id="cardNumber" value={formData.cardNumber} placeholder="**** **** **** ****" />
                    {cardNumberError&&<div>Card Number Invalid</div>}

                    <div> <label htmlFor="expirationDate"> Expiration Data</label></div>
                    <input onChange={handleChange} type="date" name="expirationDate" id="expirationDate" />
                    {expirationDateError&&<div>Date Invalid</div>}

                    <div><label htmlFor="cvv">CVV</label></div>
                    <input onChange={handleChange} type="password" name="cvv" id="cvv"  placeholder="***"/>
                    {cvvError&&<div>Wrong cvv</div>}
                    <Button sx={{margin: "30px 25%"}} onClick={handleSubmit} variant="contained">Start Course</Button>
                </form>

                
            </div>
        </div>}
        </div>
        
    )
}