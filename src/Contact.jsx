import React, { useState } from 'react';
import { useEffect } from 'react';

function Contact(){

    const textToCopy = "matthew_adrian_u_chua@dlsu.edu.ph"
    const [showNotification, setShowNotification] = useState(false);

    const handleCopyClick = () => {
        navigator.clipboard.writeText(textToCopy);
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 3000); // 3 seconds
      };

      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


    return(
        <body>
            <div id="contactMainContainer">
                <h1 id="contactFirstLine">Send me an <button id="contactButton" onClick={() => window.open("https://accounts.google.com/b/0/AddMailService", "_blank")} > EMAIL 
                    </button> at <button id="contactEmail" onClick={() => {handleCopyClick()}} >matthew_adrian_u_chua@dlsu.edu.ph</button></h1>
                <h2 id="contactSecondLine">Thank you!</h2>
                <h2 id="notification" className={showNotification ? 'visible' : 'hidden'}> Email copied to clipboard </h2>
            </div>
        </body>
    );
}

export default Contact