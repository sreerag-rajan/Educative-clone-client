import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./Tabs.css"
import LanguageIcon from '@mui/icons-material/Language';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { BsStars} from 'react-icons/bs';
import { ImFlag} from 'react-icons/im';
import DeveloperBoardOffIcon from '@mui/icons-material/DeveloperBoardOff';
import { BrowseAll } from "./components of explore/browseAll";
// import { OurPicks } from "./components of explore/ourPicks";
import { useState, useEffect } from "react";








function TabPanel(props) {
  const { children, value, index, ...other } = props;

    

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [course,setCourse] = useState([])

    const Data = async () => {
      try{
        var res = await fetch("http://localhost:2345/explores");
        var data = await res.json();
        setCourse(data);
      }
      catch(e){
        console.log(e)
      }
    }

    useEffect(() => {
      Data()
      console.log(course)
      return
    },[])

  const browser = (a,b) => {
    return (
      <div className="icon-text">
        <div>{a}</div>
        <div>{b}</div>
      </div>
    )
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 3, borderColor: 'divider' }}>
      <div className="tabs">
        <Tabs className="tab-bottom" value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label={browser(<LanguageIcon style={{ fontSize: 30 }} />,"Browse All")} {...a11yProps(0)} sx={{ width:"20%",fontWeight: "bold" }} />
            <Tab label={browser(<StarBorderIcon style={{ fontSize: 30 }}/>,"Our Picks")} {...a11yProps(1)} style={{ width:"20%" }} />
            <Tab label={browser(<BsStars style={{ fontSize: 30 }} />,"New")} {...a11yProps(2)} style={{ width:"20%" }} />
            <Tab label={browser(<ImFlag style={{ fontSize: 30 }} />,"Early Access")} {...a11yProps(3)} style={{ width:"20%" }} />
            <Tab label={browser(<DeveloperBoardOffIcon style={{ fontSize: 30 }} />,"Free")} {...a11yProps(4)} style={{ width:"20%" }} />
        </Tabs>
        </div>
      </Box>
      <div className="tab-content">
        <TabPanel className="buttons" value={value} index={0}>
          <button className="btns">Python</button>
          <button className="btns">Go</button>
          <button className="btns">JavaScript</button>
          <button className="btns">Rust</button>
          <button className="btns">C++</button>
          <button className="btns">TypeScript</button>
          <button className="btns">React</button>
          {/* <hr/> */}
          <br />
          <br />
          {/* <ImgMediaCard /> */}
          <div className="grid-container">
            {course && <BrowseAll course={course} />}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="grid-container">
            {course && <BrowseAll course={course} />}
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item five
        </TabPanel>
      </div>
    </Box>
  );
}