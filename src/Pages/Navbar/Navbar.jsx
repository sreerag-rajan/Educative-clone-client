import { Auth } from "./Components/Auth"
import { Logo } from "./Components/Logo"
import { Sections } from "./Components/Sections"
import { TemporaryDrawer } from "./Components/SectionsOnSmall"
import "./Navbar.css"


export const Navbar = ()=>{
    return (
    <nav className="navbar">
      <div>
      <TemporaryDrawer/>
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



