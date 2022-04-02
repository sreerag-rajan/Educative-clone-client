import multiplelanguageIcons from "../../../Assets/Home/MultipleLanguagesIcon.svg"

export const Part2 = ()=>{
    return(
        <div className="part2">
            <h1>Hands on coding environments</h1>
            <p>You don’t get better at swimming by watching others. Coding is no different. Practice as you learn with live code environments inside your browser.</p>
            <iframe  src="https://player.vimeo.com/video/494436751?autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&quality=720p" frameBorder="0"></iframe>
            <img src={multiplelanguageIcons} alt="multiplelanguageIcon" />
        </div>
    )
}



