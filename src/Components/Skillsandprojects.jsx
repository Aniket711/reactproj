import React from 'react'
import Header from "./Header";
import "./Skillsandprojects.css";

function Skillsandprojects() {
    return (
        <div className="section_container">
            <Header 
            heading="Skills and Projects Page"
            details="Passionate about new technologies. I keep exploring stuff."
            />
            <p className="mydesc"
            >Technologies/Programming languages I know:</p>

            <div className="myskills">
            <img className="html"
            src="/html5_logo.png" alt="error" />
            <img src="/css_logo.png" alt="error" />
            <img src="/js_logo.png" alt="error" />
            <img src="/bootstrap_logo.png" alt="error" />
            <img src="/c_logo.png" alt="error" />
            <img src="/cpp_logo.png" alt="error" />
            <img src="/python_logo.png" alt="error" />
            </div>
            
            <p className="mydesc"
            >My projects:</p>
            <div>
             <ul>
                 <li>To-do list application</li>
                 <li>Netflix clone website</li>
                 <li>Infoscraper (Information Scraping tool)</li>
                 </ul>   
            </div>
        </div>
    )
}

export default Skillsandprojects;
