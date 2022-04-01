import { Auth } from "./Components/Auth"
import { Logo } from "./Components/Logo"
import { Sections } from "./Components/Sections"
import "./Navbar.css"


export const Navbar = ()=>{
    return (
    <nav className="navbar">
      <div>
      <Logo/>
      <Sections/>
      </div>
      <div>
      <Auth/>
      </div>

    </nav>
    )
    
}

// export const Navbar = ()=>{
//     return(
//         <nav></nav>
//     )
// }



