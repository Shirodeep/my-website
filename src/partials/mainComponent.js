import React from "react";
import Project from "./projects";

function MyHome(){
    return(
        <div className="home" id="home">
           <div  className="infos">
                <h1 className="heading">Home</h1>
                <p className="my-words"> 
                    I got influenced by many individuals that I watched n youtube.
                    From that day I am interested in technical fields and want to do everything I can in these feilds.
                    I am always in front of laptop I got after high school and I found interesting devices, tools, technology.
                    Nowadays I like to do small projects to achieve my dream of being software engineer. 
               </p>
                <p>Passionate in coding and adventurer.</p>
           </div>
            <img src="./images/logo.jpg" className="image-for-home"/>
        </div>      
    )
}


function Projects(){
    return (
        <div className="project-text" id="projects">
            < Project 
            img="./images/pathfindingalgorithm.png" 
            name="Path Finding Algorithm "
            github="https://github.com/Shirodeep/Use-Of-Path-Finding-Algorithm-python/tree/master"
            projectStatus = "Project Completed"
            blablabla = "True"
            />
            < Project 
            img="./images/tetrisgame.png" 
            name="Tetris Game Using Python"
            github="https://github.com/Shirodeep/Tetris-using-python.git"
            projectStatus = "Project Completed"
            />
            < Project 
            img="./images/reactHtmlJsCss.webp" 
            name="Webpage using React"
            github="https://github.com/Shirodeep/my-website.git"
            projectStatus = "Project Incomplete"
            />
             < Project 
            img="./images/nodeExpressMongo.jpg" 
            name="Blog site"
            github="https://github.com/Shirodeep/Blogsite.git"
            projectStatus = "Project Completed"
            />
            
        </div>
    )
} 

function About(){
    return(
        <div className="about" id="about">
            <h1>This is all about me.</h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus doloribus quia inventore unde eum dolore mollitia ex eaque modi, dolor quos deserunt reprehenderit ut nobis laboriosam expedita illum doloremque.</p>
        </div>
    )
}

function Contact(){
    return(
        <div className="contact" id="contact">
            <div className="email-holder">
                <h1>To contact me.</h1>
                <div className="contact-message">
                   <div className="first-box">
                        <label className="label1" for="email">Email:</label>
                        <input type="email"id="email" className="inputs1"/>
                    </div>
                    <div className="second-box">
                        <label  className="label2"for="message">Message:</label>
                        <textarea id="message" className="inputs2" rows="4" cols="29"></textarea>
                    </div>
                    <div className="submit-button"><input type="submit" value="Submit" className="inputs"/></div>
                </div>
            </div>
            <ul className="contact-list">
                <li><a href="https://github.com/shirodeep"><i className=" fa fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/shirodeep-dahal-9877a7210/"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="https://twitter.com/carlousMarkus"><i className="fa fa-twitter"></i></a></li>
            </ul>
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
        < Contact />    
    </div>)
}