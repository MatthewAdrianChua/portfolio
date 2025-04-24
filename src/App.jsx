
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import LandingPage from './LandingPage.jsx'
import About from './About.jsx'
import React, {useState} from 'react';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import './App.css'

function App() {

  const [currentPage, setCurrentPage] = useState('landing');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About LandingPage currentPage={currentPage} setCurrentPage={setCurrentPage}/>;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact  />;
      case 'landing':
      default:
        return <LandingPage currentPage={currentPage} setCurrentPage={setCurrentPage}/>;
    }
  };

  return(
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage}></Header>

      {renderPage()}

      <Footer></Footer>
    </>
  
  );
}

export default App
