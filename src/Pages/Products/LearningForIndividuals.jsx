
import "./LearningForIndividuals components/LearningForIndividuals.css"
import Tab from "./LearningForIndividuals components/Tabs"

export const LearningForIndividuals = () => {
    
    return ( 
        <div>
            <div className="upperdiv">
                {/* heading */}
                <p className="mainheading">
                Learn something new!
                </p>     
            </div>

            {/* tabs */}
            <Tab />
            
            
        </div>
    )
}