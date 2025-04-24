function Footer(){
    return(
        <footer id="footer">
            <div id="footerIcons">
                <img src="github.png" alt="github" className="footerIcon" onClick={() => window.open("https://github.com/MatthewAdrianChua", "_blank")}/>
                <img src="linkedin.png" alt="linkedin" className="footerIcon" onClick={() => window.open("https://www.linkedin.com/in/matthew-chua-073bb92a8/", "_blank")}/>
                <h5 id="footerCV" onClick={() => window.open("https://drive.google.com/file/d/1r8ID-Q_JGlnuR1BFxSAOf-2ytXRrbg2K/view?usp=sharing", "_blank")}>CV</h5>
            </div>
            <p id="footerText">{new Date().getFullYear()} Matthew Adrian Chua</p>
            <p> Made in ReactJS </p>
        </footer>
    );
}

export default Footer