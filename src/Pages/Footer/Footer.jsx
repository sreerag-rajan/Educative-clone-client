import React from 'react'
import {Container, LowerBox, MidBox, MidDiv, UpperBox} from './FooterStyles'
import {Button} from '@mui/material';

export const Footer = () => {
  return (
    <Container>
        <MidDiv>
            <UpperBox>
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" height="20px"><path d="M333 0H67A67 67 0 000 67v266a67 67 0 0067 67h266a67 67 0 0067-67V67a67 67 0 00-67-67zm29 325a37 37 0 01-37 37H75a37 37 0 01-37-37V162h324zm0-201H38V75a37 37 0 0137-37h250a37 37 0 0137 37z"></path><rect x="68" y="63" width="38.1" height="38.1" rx="2.4"></rect><rect x="126" y="63" width="38.1" height="38.1" rx="2.4"></rect><rect x="184" y="63" width="38.1" height="38.1" rx="2.4"></rect><rect x="200" y="295" width="114.3" height="38.1" rx="3.3"></rect><path d="M109 331a3 3 0 005 0l61-68a3 3 0 001-4l-59-69a3 3 0 00-4-1l-20 17a3 3 0 00-1 5l40 47a3 3 0 010 4l-43 47a3 3 0 001 4z"></path></svg>&nbsp;&nbsp;&nbsp;
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 862 141" height="20" class="h-4 ml-2"><path d="M90 62a44 44 0 00-17-17 49 49 0 00-24-6 49 49 0 00-25 7A46 46 0 006 64a53 53 0 00-6 26 53 53 0 006 26 45 45 0 0019 18q12 6 27 6a57 57 0 0022-4 39 39 0 0016-12l-12-14q-10 11-25 11-11 0-18-5a25 25 0 01-11-13l73-14q0-15-7-27zM21 89v-1q0-14 8-22t20-8a26 26 0 0126 20zm167-37a35 35 0 00-14-10 43 43 0 00-17-3 49 49 0 00-25 6 45 45 0 00-17 18q-6 12-6 27t6 26a45 45 0 0017 18 49 49 0 0025 6 44 44 0 0018-3c5-2 10-6 12-11v14h20V3h-19zm-4 54a27 27 0 01-10 11 29 29 0 01-29 0 27 27 0 01-10-11 34 34 0 01-4-16 34 34 0 014-17 27 27 0 0110-11 29 29 0 0129 0 27 27 0 0110 11 34 34 0 014 17 34 34 0 01-4 16zm112-16c0 13-4 17-8 22s-11 8-19 8q-11 0-17-7c-4-4-5-11-5-19V39h-19v58q0 21 11 32c7 8 13 11 26 11a41 41 0 0017-3 37 37 0 0014-10v13h20V39h-20zm88-32a26 26 0 0114 4 27 27 0 0110 10l16-10a38 38 0 00-15-17q-11-6-24-6a51 51 0 00-26 6 46 46 0 00-18 18 53 53 0 00-7 26 53 53 0 007 27 46 46 0 0018 18 52 52 0 0026 6 47 47 0 0023-6 39 39 0 0016-17l-16-10a27 27 0 01-10 10 26 26 0 01-14 3q-12 0-20-8t-8-23q0-14 8-22a27 27 0 0120-9zm201 63q-7 0-10-3a19 19 0 01-5-11V59h25V39h-24V20h-20v19h-15v20h15v48q0 17 8 25c6 6 13 8 23 8a41 41 0 0012-1 26 26 0 009-5l-6-17a19 19 0 01-12 4zm39-82h19v101h-19zm87 76l-29-76h-22l39 101h23l41-101h-22l-30 76zm107 6q-10 0-18-5a26 26 0 01-10-13l72-14q0-15-6-27a44 44 0 00-17-17 52 52 0 00-50 0 46 46 0 00-17 19c-4 7-8 16-8 26s4 18 8 26a46 46 0 0018 18q12 6 28 6a57 57 0 0022-4 39 39 0 0016-12l-12-14q-10 11-26 11zm-31-33q0-14 8-22t19-8a26 26 0 0127 20l-54 11zM624 0h19v19h-19zM513 47c-8-5-15-8-28-8-21 0-34 5-41 16l19 9c3-6 10-8 21-8l15 2c3 2 4 4 5 7v12h-5c-41 0-62 11-62 34a26 26 0 0011 21c6 6 15 8 25 8 13 0 23-3 32-9v9h19V76c0-14-4-24-11-29zm-8 64a30 30 0 01-11 9 37 37 0 01-16 3c-6 0-10-1-14-3a10 10 0 01-4-9c0-12 12-18 35-18h10z"></path></svg>
            <p>Learn in-demand tech skills in half the time</p>
            </UpperBox>
            <MidBox>
                <div className="first">
                   <p className="head">SOLUTIONS</p> 
                   <p>Educative for <br/> Business</p> 
                   <p>Educative for <br/> Individuals</p> 
                   <p>Educative for HR/<br/> recruiting</p> 
                   <p>Educative for <br/> Bootcamps</p> 
                </div>
                <div className="second">
                   <p className="head">PRODUCTS</p> 
                   <p>Educative Learning</p> 
                   <p>Educative <br/> Onboarding</p> 
                   <p>Educative Skills<br/> Assessments</p> 
                  <br/>
                  <p className="head">PRICING</p> 
                   <p>For Individuals</p> 
                   <p>For Teams</p>
                </div>
                <div className="third">
                <p className="head">RESOURCES</p> 
                   <p>Educative Blog</p> 
                   <p>Edpresso</p> 
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                  <p className="head">CONTRIBUTE</p> 
                   <p>Become an Author</p> 
                   <p>Become an Affiliate</p>
                   <p>Become a <br/> Contributor</p>
                </div>
                <div className="fourth">
                <p className="head">LEGAL</p> 
                   <p>Privacy Policy</p> 
                   <p>Terms of Service</p> 
                   <p>Business Terms of<br/> Service</p> 
                  <p className="head">ABOUT US</p> 
                   <p>Our Team</p> 
                   <p>Career <Button style={{cursor: "none"}} variant="contained" size="small">Hiring</Button></p>
                </div>
                <div className="fifth">
                <p className="head">More</p> 
                   <p>Course Catalog</p> 
                   <p>Early Access<br/> Courses</p> 
                   <p>Free trials</p> 
                   <p>CodingInterview.com</p>
                   <p>Press</p> 
                   <p>Contact Us</p>
                </div>
            </MidBox>
            <LowerBox>
                <div>
                    <div>
                        <a href="//facebook.com/educativeinc" target="_blank" rel="noopener noreferrer" aria-label="Facebook" id="fb" class="mb-4 text-gray-50 fill-current hover:text-primary focus:text-primary dark:hover:text-primary-light dark:focus:text-primary-light hover:cursor-pointer focus:cursor-pointer"><span class="mr-1 flex justify-center h-12 w-12"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></span></a>
                    </div>
                    <div>
                        <a href="//linkedin.com/company/educative-inc/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin" id="linkedin" class="mb-4 text-gray-50 fill-current hover:text-primary focus:text-primary dark:hover:text-primary-light dark:focus:text-primary-light hover:cursor-pointer focus:cursor-pointer"><span class="mr-1 flex justify-center h-12 w-12"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></span></a>
                    </div>
                    <div>
                    <a href="//twitter.com/educativeinc" target="_blank" rel="noopener noreferrer" aria-label="Twitter" id="twitter" class="mb-4 text-gray-50 fill-current hover:text-primary focus:text-primary dark:hover:text-primary-light dark:focus:text-primary-light hover:cursor-pointer focus:cursor-pointer"><span class="mr-1 flex justify-center h-12 w-12"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></span></a>
                    </div>
                    <div>
                    <a href="//www.youtube.com/channel/UCT_8FqzTIr2Q1BOtvX_DPPw/?sub_confirmation=1" target="_blank" id="youtube" rel="noopener noreferrer" aria-label="YouTube" class="mb-4 text-gray-50 fill-current hover:text-primary focus:text-primary dark:hover:text-primary-light dark:focus:text-primary-light hover:cursor-pointer focus:cursor-pointer"><span class="mr-1 flex justify-center h-12 w-12"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></span></a>
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright ©2022 Educative, Inc. All rights reserved.</p>
                    &nbsp;
                    <img src="https://www.educative.io/static/imgs/soc2.svg" alt="" height="40px" width="40px"/>
                </div>
            </LowerBox>
        </MidDiv>
    </Container>
  )
}
