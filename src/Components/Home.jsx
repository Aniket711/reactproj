import React from 'react';
import Header from './Header';
import "./Home.css";



function Home() {

        return (
        <div className="section_container">
            <Header 
            heading="Home Page"
            details="Welcome to my Portfolio."
            />
            <div className="intro">
                <h3> I AM ANIKET SONMALI.</h3>
            </div>
            <div className="intro">
                <h3>I design and build user interfaces.</h3>
            </div>
            <div className="homeimg">
            <img src="/homebckg.jpg" alt="error" />
            </div>
            <div className="homeimg2">
            <img src="/homebckg1.jpg" alt="error" />
            </div>
            

        </div>
    )
};

export default Home;
