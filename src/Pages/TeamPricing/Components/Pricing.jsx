

export const Pricing = ()=>{
    return(
        <div id = "price">
            <div>
                <div id = "line"></div>
                <div className = "price1">
                    <h2 className = "top">Team</h2>
                    <p className = "mid">Upskill teams who are passionate about learning.</p>
                </div>
                <div className = "price2">
                    <h5 className = "dollar">$299</h5>
                    <h3 className = "real">$269</h3>
                    <p className = "top1">Per learner, billed annually</p>
                    <p className = "top2">discounted price for <img  className = "img_size"src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/in.svg" alt="" /></p>
                    <div className = "butt">
                        <button className = "buy1">Buy Now</button>
                    </div>
                </div>
                <div className = "price3">
                    <p className ="top3">Everything included in Team, and:</p>
                    <p className = "top4"><span>&#10003;</span> Team Management</p>
                    <p className = "top4"><span>&#10003;</span> Customized Skill Paths</p>
                    <p className = "top4"><span>&#10003;</span>Hands-on Projects</p>
                    <p className = "top4"><span>&#10003;</span>Single sign-on (Google)</p>
                    <p className = "top4"><span>&#10003;</span>New courses every week</p>
                    <p className = "top4"><span>&#10003;</span>Unlimited access to courses</p>
                    <p className = "top4"><span>&#10003;</span>Completion certificates</p>
                    <p className = "top4"><span>&#10003;</span>Personalized learning plan</p>
                </div>
            </div>
            <div>
            <div id = "line1"></div>
            <div className = "price1">
                <h2 className = "top">Enterprise</h2>
                <p className = "mid">Manage new hire onboarding, create personalized learning plans, and gain valuable team insights.</p>
                </div>
            <div className = "price2">
                <div className = "change">
                    <h5 className = "dollar"></h5>
                    <h3 id="real123" className = "real1">$369</h3>
                    <br />
                    <p className = "top1">Per learner, billed annually</p>
                    <p className = "top2">discounted price for <img  className = "img_size"src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/in.svg" alt="" /></p>
                    <div className = "butt4">
                        <button className = "buy12">Let's Chat</button>
                        
                    </div>
                </div>
            </div>
            <div className = "price3">
                <p className ="top3">Everything included in Team, and:</p>
                <p className = "top4"><span>&#10003;</span>Team learning analytics</p>
                <p className = "top4"><span>&#10003;</span> Onboarding plan creation</p>
                <p className = "top4"><span>&#10003;</span>Usage & progress tracking</p>
                <p className = "top4"><span>&#10003;</span>Access to our customer success team</p>
                <p className = "top4"><span>&#10003;</span>Slack integration</p>
                <p className = "top4"><span>&#10003;</span>OpenID SSO (Okta, Azure)</p>
                <p className = "top4"><span>&#10003;</span>Custom course creation</p>
                <p className = "top4"><span>&#10003;</span>Ability to assign courses & Skill Paths</p>
                <p className = "top4"><span>&#10003;</span>Annual SOC2 Type II reports</p>
            </div>
        </div>
        <div>
            <div id = "line2"></div>
            <div id = "price12">
                <h2 className = "top">Enterprise Plus</h2>
                <p className = "mid">Organizations looking for a faster, easier, and more customized approach to onboarding and learning new skills.</p>
                </div>
            <div id="price22">
                <p id = "ask">Ask for pricing</p>
                <div className = "butt1">
                    <button className = "buy1">Let's Chat</button>
                </div>
            </div>
            <div id = "price3">
                <p className ="top3">Everything included in Team, and:</p>
                <p className = "top4"><span>&#10003;</span>Dedicated customer success manager</p>
                <p className = "top4"><span>&#10003;</span>Analytics API (coming soon)</p>
                <p className = "top4"><span>&#10003;</span>Professional services</p>
                <p className = "new">Connect with our team about additional professional services, LMS integrations, and custom course development by our industry-leading learning team members.</p>
            </div>
        </div>
    </div>
    )
}