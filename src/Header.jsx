function Header({currentPage, setCurrentPage}){
    return(
        <header id="header">
            <h1 id="matthew" onClick={() => setCurrentPage('landing')}>MATTHEW CHUA</h1>
            <nav id="navContainer">
                <ul id="navBar">
                    <button onClick={() => setCurrentPage('landing')} id={currentPage === 'landing' ? 'activeHome' : 'navHome'} className="navLinks" >Home</button>
                    <button onClick={() => setCurrentPage('about')} id={currentPage === 'about' ? 'activeAbout' : 'navAbout'} className="navLinks">About Me</button>
                    <button onClick={() => setCurrentPage('projects')} id={currentPage === 'projects' ? 'activeProject' : 'navProject'} className="navLinks" >Projects</button>
                </ul>
            </nav>
            <button onClick={() => setCurrentPage('contact')} id={currentPage === 'contact' ? 'activeContact' : 'contact'} className="navLinks" >Contact Me</button>
        </header>
    );
}

export default Header