import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import learnIndividual from "../../../Assets/Navbar/Sections/learnIndividual.svg"
import developerIcon from "../../../Assets/Navbar/Sections/developer.svg"
export const Sections = ()=>{
    return(
        <div className="sections">
            <Solutions/>
            <Products/>
            <Pricing/>
        </div>
    )
}




;



const Solutions = ()=> {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (route)=>{
      navigate(route);
      setAnchorEl(null);
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{color:"black", fontWeight: "bold"}}
      >
        Solutions
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>(handleNavigate("/business"))}> <div><svg viewBox="0 0 20 14" fill="current" stroke="none" xmlns="http://www.w3.org/2000/svg" className="navSectionIcon"><path fillRule="evenodd" clipRule="evenodd" d="M7 7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-7 5.3c0-2.4 4.7-3.6 7-3.6s7 1.2 7 3.6V14H0v-1.8Zm7-1.6c-1.8 0-3.8.7-4.7 1.3h9.4A9.6 9.6 0 0 0 7 10.7Zm1.5-7.2a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM14 8.8c1.2.8 2 2 2 3.4V14h4v-1.8c0-2-3.5-3.1-6-3.4Zm2.5-5.3a3.5 3.5 0 0 1-5 3.2 5.4 5.4 0 0 0 0-6.4L13 0c2 0 3.5 1.6 3.5 3.5Z" fill="current"></path></svg>Developer Teams</div></MenuItem>
        <MenuItem onClick={()=>(handleNavigate("/individual-learner"))}> <div>
            {/* <svg viewBox="0 0 24 24" fill="current" xmlns="http://www.w3.org/2000/svg" className="navSectionIcon"><path d="m4 17 6-6-6-6M12 19h8" stroke="current" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"></path></svg> */}
             <img src={developerIcon} alt="" className='navSectionIcon'/>
             Developer
             </div> </MenuItem>
      </Menu>
    </div>
  );
}


const Products = ()=> {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate()
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleNavigate = (route)=>{
        navigate(route);
        setAnchorEl(null);
    }
  
    return (
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{color:"black", fontWeight: "bold"}}
        >
          Products
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={()=>(handleNavigate("/upskill"))}> <div>
              <svg viewBox="0 0 24 24" fill="current" stroke="none" xmlns="http://www.w3.org/2000/svg" className="navSectionIcon"><path d="M4 13a2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2c0 1.1.9 2 2 2Zm1.1 1.1a7 7 0 0 0-3.9.5A2 2 0 0 0 0 16.4V18h4.5v-1.6c0-.8.2-1.6.6-2.3ZM20 13a2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2c0 1.1.9 2 2 2Zm4 3.4a2 2 0 0 0-1.2-1.8 7 7 0 0 0-4-.5c.5.7.7 1.5.7 2.3V18H24v-1.6Zm-7.8-2.7a10.4 10.4 0 0 0-8.4 0A3 3 0 0 0 6 16.4V18h12v-1.6a3 3 0 0 0-1.8-2.7ZM8.1 16c0-.2.1-.4.9-.7a8.2 8.2 0 0 1 6 0c.8.3.8.5 1 .7H8ZM12 8c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1-1-1c0-.6.4-1 1-1Zm0-2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" fill="current"></path></svg>
            Learning For Teams
          </div> </MenuItem>
          <MenuItem onClick={()=>(handleNavigate("/explore"))}> <div>
          {/* <svg viewBox="0 0 18 22" fill="current" xmlns="http://www.w3.org/2000/svg" className="navSectionIcon"><path d="M1 18.5A2.5 2.5 0 0 1 3.5 16H17" stroke="current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3.5 1H17v20H3.5A2.5 2.5 0 0 1 1 18.5v-15A2.5 2.5 0 0 1 3.5 1v0Z" stroke="current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg> */}
              <img src={learnIndividual} alt="" className='navSectionIcon' />
              Learning for Individuals</div> </MenuItem>
          <MenuItem onClick={()=>(handleNavigate("/onboarding"))}> <div>
          <svg viewBox="0 0 18 18" fill="current" stroke="none" xmlns="http://www.w3.org/2000/svg" class="navSectionIcon"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 16V1h-4V0H2v16H0v2h12V3h2v15h4v-2h-2Zm-6 0H4V2h6v14ZM9 8H7v2h2V8Z" fill="current"></path></svg>
              Onboarding
              </div></MenuItem>
        </Menu>
      </div>
    );
  }

  const Pricing = ()=> {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleNavigate = (route)=>{
        navigate(route);
        setAnchorEl(null);
    }
  
    return (
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{color:"black", fontWeight: "bold"}}
        >
          Pricing
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={()=>(handleNavigate("/unlimited"))}>
              <div>
              <svg viewBox="0 0 16 16" fill="current" stroke="none" xmlns="http://www.w3.org/2000/svg" className="navSectionIcon"><path fillRule="evenodd" cliRule="evenodd" d="M8 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm2 4a2 2 0 0 0-2-2 2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2Zm4 10c-.2-.7-3.3-2-6-2s-5.8 1.3-6 2h12ZM0 14c0-2.7 5.3-4 8-4s8 1.3 8 4v2H0v-2Z" fill="current"></path></svg>
                  For Individuals
              </div>
                </MenuItem>
          <MenuItem onClick={()=>(handleNavigate("/business-pricing"))}>
              <div>
              <svg viewBox="0 0 20 14" fill="current" stroke="none" xmlns="http://www.w3.org/2000/svg" className="navSectionIcon"><path fillRule="evenodd" clipRule="evenodd" d="M7 7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-7 5.3c0-2.4 4.7-3.6 7-3.6s7 1.2 7 3.6V14H0v-1.8Zm7-1.6c-1.8 0-3.8.7-4.7 1.3h9.4A9.6 9.6 0 0 0 7 10.7Zm1.5-7.2a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM14 8.8c1.2.8 2 2 2 3.4V14h4v-1.8c0-2-3.5-3.1-6-3.4Zm2.5-5.3a3.5 3.5 0 0 1-5 3.2 5.4 5.4 0 0 0 0-6.4L13 0c2 0 3.5 1.6 3.5 3.5Z" fill="current"></path></svg>
                  For Teams
              </div>
              </MenuItem>
        </Menu>
      </div>
    );
  }

