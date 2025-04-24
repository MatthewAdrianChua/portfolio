import { useEffect } from 'react';

function About({setCurrentPage}){

    useEffect(() => {
            window.scrollTo(0, 0);
          }, []);

    return(
        <body>
            <div id="aboutMainContainer">
                <div id="profileAndContact">
                    <img src="profilePic.jpg" alt="Profile Pic" id="aboutPic"></img>
                    <h5 className="contactHeader"> My Contacts </h5>
                    <div className="horizontalLineProfile"></div>
                    <div className="contactContainer">
                        <img className="icon" src="phone.png" alt="phone" />
                        <h5 className="contactInfo" id="phone">+63 9173025353</h5>
                    </div>
                    <div className="contactContainer">
                        <img className="icon" src="mail.png" alt="mail"></img>
                        <h5 className="contactInfo" id="email">matthew_adrian_u_chua<br></br>@dlsu.edu.ph</h5>
                    </div>
                    <div className="contactContainer">
                        <img className="icon" src="location.png" alt="location"></img>
                        <h5 className="contactInfo" id="location">Manila, Philippines</h5>
                    </div>
                    <h5 className="contactHeader"> My Links </h5>
                    <div className="horizontalLineProfile"></div>
                    <button className="contactButtons" id="resume" onClick={() => window.open("https://drive.google.com/file/d/1r8ID-Q_JGlnuR1BFxSAOf-2ytXRrbg2K/view?usp=drive_link", "_blank")}>Resume</button>
                    <button className="contactButtons" onClick={() => window.open("https://github.com/MatthewAdrianChua", "_blank")}>Github</button>
                    <button className="contactButtons" onClick={() => window.open("https://www.linkedin.com/in/matthew-chua-073bb92a8/", "_blank")}>LinkedIn</button>
                </div>
                <div id="verticalLineAbout">

                </div>
                <div id="credentialContainer">
                    <h1 className="aboutHeader">CHUA, MATTHEW ADRIAN U.</h1>
                    <hr></hr>
                    <p className='projectDescriptionText'>I am a fourth-year computer science student looking to expand my knowledge and experience in the technological field through an on-the-job training program where I can apply the skills I have gained throughout the years in my undergraduate program. I aim to contribute to a dynamic team environment through coding, debugging, cybersecurity risk analysis, and problem-solving to develop robust and efficient software programs.</p>
                    <div id="firstRowCredentials">
                    <div className="credentials" id="skills">
                        <h2 className="aboutHeader">SKILLS</h2>
                        <hr></hr>
                        <p className='projectDescriptionText'>
                            Languages: C, C#, Python, Java, JavaScript, CSS, HTML</p>
                            <p className='projectDescriptionText'>Database Systems Knowledge: MySQL, MongoDB </p>
                            <p className='projectDescriptionText'>Frameworks: ReactJS </p>
                            <p className='projectDescriptionText'>- Leadership and Communication Skills </p>
                            <p className='projectDescriptionText'>- Adaptability </p>
                            <p className='projectDescriptionText'>- Knowledge of AI systems and Development </p>
                            <p className='projectDescriptionText'>- Agile and DevOps development</p>
                    </div>
                    <div id="verticalLineCredential"></div>
                    <div className="credentials" id="education">
                        <h2 className="aboutHeader">EDUCATION</h2>
                        <hr></hr>
                        <p className='projectDescriptionText'>
                            Bachelor of Science in Computer Science Major in Software Technology <br></br>
                            2022 - Present <br></br>
                            De La Salle University
                        </p>
                        <p className='projectDescriptionText'>
                            Accountancy and Business Management (ABM) <br></br>
                            2019 - 2021 <br></br>
                            De La Salle Integrated School Manila
                        </p>
                        <p className='projectDescriptionText'>
                            Junior High School <br></br>
                            2008 - 2019 <br></br>
                            St. Stephen’s High School
                        </p>
                    </div>
                    </div>
                    <div id="secondRowCredentials">
                    <div className="credentials" id="certifications">
                        <h2 className="aboutHeader">CERTIFICATIONS</h2>
                        <hr></hr>
                        <p className='projectDescriptionText'>
                            Silver Academic Award, De La Salle Integrated School Manila<br></br>
                            &emsp; - Senior High School, 2021
                        </p >
                        <p className='projectDescriptionText'>
                            Jose Rizal First Honors Certificate <br></br>
                            &emsp; - Term 2, A.Y. 2023-2024
                        </p>
                        <p className='projectDescriptionText'>
                            Jose Rizal Second Honors Certificate <br></br>
                            &emsp; - Term 1, A.Y. 2022-2023 <br></br>
                            &emsp; - Term 2, A.Y. 2022-2023 <br></br>
                            &emsp; - Term 3, A.Y. 2022-2023
                        </p>
                    </div>
                    <h5 id="myProjects" onClick={() => setCurrentPage('projects')}>MY PROJECTS &gt; &gt; &gt;</h5>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default About