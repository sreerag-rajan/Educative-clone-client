import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

export function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
  });
  const navigate = useNavigate()

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, top: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top'&& 'auto'}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem onClick={()=>(navigate("/business"))} button>
            <ListItemText  primary={"Developer Teams"} />
          </ListItem>
          <ListItem onClick={()=>(navigate("/individual-learner"))} button>
            <ListItemText primary={"Developer"} />
          </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem onClick={()=>(navigate("/upskill"))} button>
            <ListItemText primary={"Learning for Teams"} />
          </ListItem>
          <ListItem onClick={()=>(navigate("/explore"))} button>
            <ListItemText primary={"Learning for Individuals"} />
          </ListItem>
          <ListItem onClick={()=>(navigate("/onboarding"))} button>
            <ListItemText primary={"Onboarding"} />
          </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem onClick={()=>(navigate("/unlimited"))} button>
            <ListItemText primary={"Pricing for Individual"} />
          </ListItem>
          <ListItem onClick={()=>(navigate("/business-pricing"))} button>
            <ListItemText primary={"Pricing for Team"} />
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div className='temporaryDrawer'>
      {[<MenuIcon/>].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer("top", true)}>{anchor}</Button>
          <Drawer
            anchor={"top"}
            open={state["top"]}
            onClose={toggleDrawer("top", false)}
          >
            {list("top")}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
