import { useEffect } from 'react';

function Projects(){
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <body>
            <div id="projectsMainContainer">
                <div className="projectsHorizontalLine"></div>
                
                <div className="project">
                    <div className="projectContainerLeft">
                        <h2 className="projectTitle">Pearl Hardware</h2>
                        <h3 className="keywords">Keywords: JavaScript, CSS, HTML, Scrum, DevOps, Agile, Git</h3>
                        <img src="pearlHardware.png" alt="pearlHardware" className="projectImage"></img>
                    </div>
                    <div className="projectsVerticalLine"></div>
                    <div className="projectContainerRight">
                        <div className="projectDescription">
                            <p> Pearl Hardware is an online e-commerce platform developed for a real-world client using both Scrum and DevOps methodologies. The website features; </p>
                            <p>
                            &emsp; - Login/Register <br></br>
                            &emsp; - Email Verification <br></br>
                            &emsp; - Add to Cart <br></br>
                            &emsp; - Checkout and Payment Functionality using Paymongo <br></br>
                            &emsp; - Product Reviews <br></br>
                            &emsp; - Product Search <br></br>
                            &emsp; - Product Sorting <br></br>
                            &emsp; - Database management using MongoDB <br></br>
                            &emsp; &emsp; - Admin Dashboard that enables the owner to; <br></br>
                            &emsp; &emsp; - Manage customer orders <br></br>
                            &emsp; &emsp; - Manage customer refunds <br></br>
                            &emsp; &emsp; - Manage product inventory <br></br>
                            </p>
                            <p>
                                The project was implemented in 2 academic terms. For the first phase, the project was implemented using Scrum Framework, and I worked as the product owner. Then, for the second phase, it was implemented with DevOps and Scrum, and I worked as both the Product Owner and Scrum Master.
                            </p>
                        </div>
                        <div className="projectButtons">
                            <button className="projectWebsite" onClick={() => window.open("https://pearl-hardware-ph.onrender.com", "_blank")}> Website </button>
                            <button className="projectGithub" onClick={() => window.open("https://github.com/MatthewAdrianChua/STSWENG-pearlhardware", "_blank")}> Github </button>
                        </div>
                    </div>
                </div>

                <div className="projectsHorizontalLine"></div>
                <div className="projectsHorizontalLine"></div>

                <div className="project">
                    <div className="projectContainerLeft">
                        <h2 className="projectTitle">Postiee</h2>
                        <h3 className="keywords">Keywords: JavaScript, CSS, HTML, Git</h3>
                        <img src="postiee.jpg" alt="postiee" className="projectImage"></img>
                    </div>
                    <div className="projectsVerticalLine"></div>
                    <div className="projectContainerRight">
                        <div className="projectDescription">
                            <p> Postiee is a simple forum website that was created to fulfill an academic requirement and served as my introduction to web development it features; </p>
                            <p>
                            &emsp; - Login/Register <br></br>
                            &emsp; - Uploading/Posting images or text blogs <br></br>
                            &emsp; - Commenting and Replies <br></br>
                            &emsp; - Profile Editing <br></br>
                            &emsp; - Post search <br></br>
                            &emsp; - Database Management using MongoDB <br></br>
                            </p>
                            <p>
                                In the project I worked as the group leader and developer, keeping track of tasks and delegating them to members, bridging communication between the developers and quality assurance, and ensuring the project gets delivered in time.
                            </p>
                        </div>
                        <div className="projectButtons">
                            <button className="projectWebsite" onClick={() => window.open("https://postiee.onrender.com", "_blank")}> Website </button>
                            <button className="projectGithub" onClick={() => window.open("https://github.com/MatthewAdrianChua/MCO1", "_blank")}> Github </button>
                        </div>
                    </div>
                </div>

                <div className="projectsHorizontalLine"></div>
                <div className="projectsHorizontalLine"></div>

                <div className="project">
                    <div className="projectContainerLeft">
                        <h2 className="projectTitle">HOA  Asset Management System</h2>
                        <h3 className="keywords">Keywords: Java, MySQL</h3>
                        <img src="ccinfom.jpg" alt="ccinfom" className="projectImage"></img>
                    </div>
                    <div className="projectsVerticalLine"></div>
                    <div className="projectContainerRight">
                        <div className="projectDescription">
                            <p> A complex relational database system built in MySQL workbench and deployed on localhost using JavaScript. The project simulates an asset management system for a HOA, demonstrating proficient use of SQL queries and database architecture design principles. </p>
                           
                        </div>
                        <div className="projectButtons">
                            <button className="projectGithub" onClick={() => window.open("https://github.com/MatthewAdrianChua/CCINFOM-FINAL-PROJECT", "_blank")}> Github </button>
                        </div>
                    </div>
                </div>

                <div className="projectsHorizontalLine"></div>
                <div className="projectsHorizontalLine"></div>

                <div className="project">
                    <div className="projectContainerLeft">
                        <h2 className="projectTitle">Security Svcs</h2>
                        <h3 className="keywords">Keywords: Java, Cybersecurity, SQL</h3>
                        <img src="cssecdv.png" alt="cssecdv" className="projectImage"></img>
                    </div>
                    <div className="projectsVerticalLine"></div>
                    <div className="projectContainerRight">
                        <div className="projectDescription">
                            <p> A software project that demonstrates cybersecurity principles and knowledge. The project is developed to be resilient against threats and hackers preventing; SQL injections, Database crashing,  password attacks, insider threats, spoofing etc. Using best cybersecurity practices such as;</p>
                            <p>
                            &emsp; - Password encryption <br></br>
                            &emsp; - Time outs <br></br>
                            &emsp; - Session Expirations <br></br>
                            &emsp; - Input Validation using Regex <br></br>
                            &emsp; - Input Sterilization <br></br>
                            &emsp; - Prepared Statements <br></br>
                            &emsp; - Access Controls <br></br>
                            &emsp; - Relational Database System using SQL <br></br>
                            </p>
                           
                        </div>
                        <div className="projectButtons">
                            <button className="projectGithub" onClick={() => window.open("https://github.com/ayayaikaaa/CSSECDV-CS1", "_blank")}> Github </button>
                        </div>
                    </div>
                </div>

                <div className="projectsHorizontalLine"></div>

                <div className="projectsHorizontalLine"></div>

                <div className="project">
                    <div className="projectContainerLeft">
                        <h2 className="projectTitle">Purrfect Match</h2>
                        <h3 className="keywords">Keywords: Java, XML, Firebase</h3>
                        <img src="purrfectMatch.jpg" alt="purrfectMatch" className="projectImage"></img>
                    </div>
                    <div className="projectsVerticalLine"></div>
                    <div className="projectContainerRight">
                        <div className="projectDescription">
                            <p> A Tinder inspired mobile application that matches users looking to adopt cats to shelters and breeders. The application was developed in Java and XML and used Firebase to store its data. </p>
                            <p>
                            It Features: <br></br>
                            &emsp; - Custom layout animations <br></br>
                            &emsp; - Matching users and cats based on personality and temperament <br></br>
                            &emsp; - Bookmarking cats <br></br>
                            &emsp; - Filtering cats  <br></br>
                            &emsp; - Database utilizing Firebase <br></br>
                            </p>
                           
                        </div>
                        <div className="projectButtons">
                            <button className="projectGithub" onClick={() => window.open("https://github.com/ikkai-r/PurrfectMatch", "_blank")}> Github </button>
                        </div>
                    </div>
                </div>

                <div className="projectsHorizontalLine"></div>
                <div className="projectsHorizontalLine"></div>

                <div className="project">
                    <div className="projectContainerLeft">
                        <h2 className="projectTitle">“Stars” Machine Learning Project</h2>
                        <h3 className="keywords">Keywords: Python, AI</h3>
                        <img src="analyze.png" alt="analyze" className="projectImage" id="analyze"></img>
                    </div>
                    <div className="projectsVerticalLine"></div>
                    <div className="projectContainerRight">
                        <div className="projectDescription">
                            <p> A Python project that utilizes a dataset of celestial objects to classify whether it is galaxy, star or quasar based on its photometric filters using the following models</p>
                            <p>
                            It Features: <br></br>
                            &emsp; - K-Nearest Neighbors (KNN) <br></br>
                            &emsp; - Logistic Regression (LR) <br></br>
                            &emsp; - Decision Trees (DT)<br></br>
                            </p>
                           
                        </div>
                        <div className="projectButtons">
                            <button className="projectGithub" onClick={() => window.open("https://github.com/ashleykylle/stintsy_finalmp", "_blank")}> Github </button>
                        </div>
                    </div>
                </div>

                <div className="projectsHorizontalLine"></div>
                <div className="projectsHorizontalLine"></div>

                <div className="project">
                    <div className="projectContainerLeft">
                        <h2 className="projectTitle">Filipino Speech Recognition (Thesis)</h2>
                        <h3 className="keywords">Keywords: Python, AI</h3>
                        <img src="ASR.png" alt="ASR" className="projectImage" id="analyze"></img>
                    </div>
                    <div className="projectsVerticalLine"></div>
                    <div className="projectContainerRight">
                        <div className="projectDescription">
                            <p> A Filipino speech-to-text model that utilizes OpenAI’s whisper Automatic Speech Recognition system. The model was fine-tuned to a Filipino health dataset will be implemented onto a chatbot for healthcare patients.</p>               
                        </div>
                        <div className="projectButtons">
                            <button className="projectGithub" onClick={() => window.open("https://github.com/ashleykylle/asr-seq2seq/tree/master", "_blank")}> Github </button>
                        </div>
                    </div>
                </div>

                <div className="projectsHorizontalLine"></div>
            </div>
        </body>
    );
}

export default Projects