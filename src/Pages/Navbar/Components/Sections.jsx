import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
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
        <MenuItem onClick={()=>(handleNavigate("/business"))}>Developer Teams</MenuItem>
        <MenuItem onClick={()=>(handleNavigate("/individual-learner"))}>Developer</MenuItem>
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
          <MenuItem onClick={()=>(handleNavigate("/upskill"))}>Learning For Teams</MenuItem>
          <MenuItem onClick={()=>(handleNavigate("/explore"))}>Learning for Individuals</MenuItem>
          <MenuItem onClick={()=>(handleNavigate("/onboarding"))}>Onboarding</MenuItem>
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
          <MenuItem onClick={()=>(handleNavigate("/unlimited"))}>For Individuals</MenuItem>
          <MenuItem onClick={()=>(handleNavigate("/business-pricing"))}>For Teams</MenuItem>
        </Menu>
      </div>
    );
  }

