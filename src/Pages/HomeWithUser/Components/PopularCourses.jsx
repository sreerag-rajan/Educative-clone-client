import {Box, Tabs, Tab, Typography, dialogClasses, Button} from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PropTypes from 'prop-types';
import { useState, useEffect } from "react";

export const PopularCourses = (courses)=>{
    //Setting States
    const [interviewCourses,setInterviewCourses] = useState([]);
    const [javascriptCourses, setJavascriptCourses] = useState([])
    const [pythonCourses, setPythonCourses] = useState([]);
    const [tab, setTab] = useState(0);
    
    //UseEffect to filter and get interview Courses
    useEffect(()=>{
        let x = courses.courses.filter((el)=>{
            if(el.subject==="Interview") return el;
        })
        setInterviewCourses(x);
    },[])
    

    //UseEffect to filter and get Javascript Courses
    useEffect(()=>{
        let x = courses.courses.filter((el)=>{
            if(el.subject==="Javascript") return el;
        })
        setJavascriptCourses(x);
    },[])

    //UseEffect to filter and get Python Courses
    useEffect(()=>{
        let x = courses.courses.filter((el)=>{
            if(el.subject==="Python") return el;
        })
        setPythonCourses(x);
    },[])

    //Handle change for the tabs
    const handleTabChange=(event,value)=>{
        setTab(value);
    }
    return(
        <div className="popularCourses">
            <Box sx={{ width: '80%', margin:"auto", marginTop:"40px" }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tab} onChange={handleTabChange} aria-label="basic tabs example">
          <Tab label="Interview Prep" {...a11yProps(0)} />
          <Tab label="JavaScript" {...a11yProps(1)} />
          <Tab label="Python" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={tab} index={0}>
      <div className="popularCourseTab">
        {interviewCourses.map((el,i)=>{            
            if(i<4){
                return <div className={"popularCourseCard"} key={el.id} sx={{height:"400px"}} variant="outlined">
                    <div>
                        <img className="courseImage" src={el.imageUrl} alt="" />
                    </div>
                    <div>
                        <p>{el.instructorAvatar&&<img className="instructorAvatar" src={el.instructorAvatar} alt="instructor Avatar"/>}{el.courseBy}</p>
                        <h3>{el.courseName}</h3>
                    </div>
                    <div className="flex">
                        <div>{el.level}</div>
                        <div><Button vairant="outlined">Preview <ArrowForwardIcon/> </Button></div>
                    </div>
                    </div>
            }
        })}
        </div>
      </TabPanel>
      <TabPanel value={tab} index={1}>
      <div className="popularCourseTab">
      {javascriptCourses.map((el,i)=>{            
            if(i<4){
                return <div className={"popularCourseCard"} key={el.id} sx={{height:"400px"}} variant="outlined">
                    <div>
                        <img className="courseImage" src={el.imageUrl} alt="" />
                    </div>
                    <div>
                        <p>{el.instructorAvatar&&<img className="instructorAvatar" src={el.instructorAvatar} alt="instructor Avatar"/>}{el.courseBy}</p>
                        <h3>{el.courseName}</h3>
                    </div>
                    <div className="flex">
                        <div>{el.level}</div>
                        <div><Button vairant="outlined">Preview <ArrowForwardIcon/> </Button></div>
                    </div>
                    </div>
            }
        })}
        </div>
      </TabPanel>
      <TabPanel value={tab} index={2}>
          <div className="popularCourseTab">
            {pythonCourses.map((el,i)=>{            
                    if(i<4){
                        return <div className={"popularCourseCard"} key={el.id} sx={{height:"400px"}} variant="outlined">
                            <div>
                                <img className="courseImage" src={el.imageUrl} alt="" />
                            </div>
                            <div>
                                <p>{el.instructorAvatar&&<img className="instructorAvatar" src={el.instructorAvatar} alt="instructor Avatar"/>}{el.courseBy}</p>
                                <h3>{el.courseName}</h3>
                            </div>
                            <div className="flex">
                                <div>{el.level}</div>
                                <div><Button vairant="outlined">Preview <ArrowForwardIcon/> </Button></div>
                            </div>
                            </div>
                    }
                })}
        </div>
      </TabPanel>
    </Box>
        </div>
    )
}

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


