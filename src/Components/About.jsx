import React from 'react';
import Header from "./Header";
import "./About.css";
import { useState } from 'react';

function About() {

    const [myName, setMyName] = useState(' ');

    const changeName = () => {
        setMyName('Thank you for visiting! ');
    }
    console.log(myName);

    return (
        <div className="section_container">
            <Header
                heading="About Page"
                details="Student | Learner | Aiming to pursue a career as a Frontend Web Developer"
            />
            <div className="content">
                <p>I am a student of Atharva College of Engineering.
                    Currently in TE of INFT department.
                </p>
                <p> Learning Frontend Web Development.</p>
                <h3>{myName}</h3>
            <button className="btn" onClick={changeName}> click here</button>

            <div className="aboutimg">
            <img src="/aboutbckg.png" alt="error" />
            </div>

            </div>
        </div>
    )
};

export default About;
