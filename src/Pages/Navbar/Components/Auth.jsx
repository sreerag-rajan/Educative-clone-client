import { Button } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux"
import Avatar from '@mui/material/Avatar';
import avatar from "../../../Assets/Navbar/Auth/avatar.png"

export const Auth = ()=>{
    // const user = useSelector((store)=>store.auth.user);
    const user = false;

    useEffect(()=>{
        // Check local storage and update user
    },[])
    
    return(
        <>
        {user?<div>
            <Avatar className="user" alt="Remy Sharp" src={avatar} />
        </div>:
        <div className="noUser">
            <div>Login</div>
            <Button variant="contained">Join For Free</Button>            
        </div>}
        </>
    )
}