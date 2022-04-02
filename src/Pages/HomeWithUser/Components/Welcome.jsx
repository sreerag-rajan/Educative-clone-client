import { useSelector } from "react-redux"


export const Welcome = ()=>{
    const user = useSelector((store)=>store.auth.user)
    return(
        <div className="welcome">
            <h1>Welcome {user?user:"Anon"}</h1>
        </div>
    )
}