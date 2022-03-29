import leftImage from "../../../Assets/Home/part3leftimg.png"
import righttImage from "../../../Assets/Home/part3rightimg.png"

export const Part3 = ()=>{
    return(
        <div>
            <h1>Inspired by and developed for Engineers like you</h1>
            <div className="flex">
                <div>
                    <img src={leftImage} alt="" />
                    <h2>Software Engineers</h2>
                    <p>We’re engineers, too. We know what it’s like to stare at code and want to get better. That’s why we started the company -- to help developers like you reach full potential.</p>
                    <button>See How</button>
                </div>
                <div>
                    <img src={righttImage} alt="" />
                    <h2>Engineering Managers and Executives</h2>
                    <p>Whether you’re building a new team or scaling the one you already have, we’ll help you reduce institutional knowledge and get everyone contributing to production-ready code faster.</p>
                    <button>See How</button>
                </div>
            </div>
        </div>
    )
}