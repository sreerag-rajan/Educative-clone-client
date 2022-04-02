
import "./LearningForIndividuals components/LearningForIndividuals.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Tab from "./LearningForIndividuals components/Tabs"

export const LearningForIndividuals = () => {
    
    return ( 
        <div>
            <div className="upperdiv">

                {/* heading */}
                <p className="mainheading">
                Learn something new!
                </p>

                {/* search bar */}
                <div className="searchbar">
                    <div><TextField fullWidth label="Search Courses" id="fullWidth" /></div>
                    <div><Button variant="contained" startIcon={<SearchOutlinedIcon style={{ fontSize: 30 }} />}>Search</Button></div>
                </div>
      
            </div>

            {/* tabs */}
            <Tab />
            
            
        </div>
    )
}