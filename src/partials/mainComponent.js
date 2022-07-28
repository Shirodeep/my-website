import React from "react";
import Project from "./projects";
import ProjectsData from "./ProjectsData";
function MyHome(){
    return(
        <div className="home" id="home">
           <div  className="infos">
                <h1 className="heading">Home</h1>
                <p className="my-words"> 
                    I got influenced by many individuals that I watched in internet.
                    From that day I am interested in technical fields and want to do everything I can in these feilds.
                    I am always in front of laptop I got after high school and I found interesting devices, tools, technology.
                    Nowadays I like to do small projects to achieve my dream of being software engineer. 
               </p>
                <p>Passionate in coding and adventurer.</p>
           </div>
            <img src="./images/logo.jpg" className="image-for-home" alt="logo-of-site"/>
        </div>      
    )
}


function Projects(){
    const projects = ProjectsData.map(item =>{
        return (
        < Project 
            item = {item}
        />)
    })
    console.log(projects)
    return (
        <div className="project-text" id="projects">
            {projects}           
        </div>
    )
} 

function About(){
    return(
        <div className="about" id="about">
        </div>
    )
}

function Contact(){
    return(
        <div className="contact" id="contact">
            <div className="email-holder">
                <h1>To contact me.</h1>
                <div name="EmailForm">
                    <div className="contact-message">
                        <div className="first-box">
                            <label className="label1" for="email">Email:</label>
                            <input type="email"id="email" placeholder="abc@xyz.com" className="inputs1" name="email" required/>
                        </div>
                        <div className="second-box">
                            <label  className="label2"for="message">Message:</label>
                            <textarea id="message" className="inputs2" placeholder="@Example: This webpage is good" rows="4" cols="29" name="message" required></textarea>
                        </div>
                        <div className="submit-button"><input type="submit" value="Submit" className="inputs"/></div>
                    </div>
                </div>
            </div>
            <ul className="contact-list">
                <li><a href="https://github.com/shirodeep"><i className="fa fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/shirodeep-dahal-9877a7210/"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="https://twitter.com/carlousMarkus"><i className="fa fa-twitter"></i></a></li>
            </ul>
        </div>
    )
}
function AppP() {
    
    const thingsArray = ["Thing 1", "Thing 2"]
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    function addItem() {
       const  elements = `Things ${thingsArray.length + 1}`
       thingsArray.push(elements)
       console.log(elements)
    }
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}
export default function MainContainer(){
    return (
    <div>
        < MyHome />
        <h1 className="projects-done">Projects completed</h1>
        < Projects />
        < About />
        <AppP />
        < Contact />    
    </div>)
}