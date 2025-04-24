import { useEffect } from 'react';

function LandingPage({setCurrentPage}){

    useEffect(() => {
                window.scrollTo(0, 0);
              }, []);

    return(
        <body id="landingPageBody">
            <div id="mainContainer">
                <div id="mainTextContainer">
                    <h1 className="mainText">Hi,</h1>
                    <h1 className="mainText">I'm <span id="name">Matthew</span></h1>
                    <h2 className="secondText">a Computer Science Undergraduate</h2>
                    <p>I am a passionate CS student. I enjoy solving complex logical problems <br></br>and learning about new emerging technologies</p>
                    <button className="landingPageButton" id="resumeButton" onClick={() => setCurrentPage('about')}>Learn More</button>
                    <button className="landingPageButton" id="projectsButton" onClick={() => setCurrentPage('contact')}>Contact Me</button>
                </div>
                <img src="profilePicSquared.jpg" alt="Profile Picture" id="profilePic"></img>
            </div>
        </body>
    );
}

export default LandingPage