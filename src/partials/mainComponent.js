import React from "react";
import Project from "./projects";

function MyHome(){
    return(
        <div className="home" id="home">
           <div  className="infos">
                <h1 className="heading">Home</h1>
                <p className="my-words"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus doloribus quia inventore unde eum dolore mollitia ex eaque modi, dolor quos deserunt reprehenderit ut nobis laboriosam expedita illum doloremque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus doloribus quia inventore unde eum dolore mollitia ex eaque modi, dolor quos deserunt reprehenderit ut nobis laboriosam expedita illum doloremque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus doloribus quia inventore unde eum dolore mollitia ex eaque modi, dolor quos deserunt reprehenderit ut nobis laboriosam expedita illum doloremque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus doloribus quia inventore unde eum dolore mollitia ex eaque modi, dolor quos deserunt reprehenderit ut nobis laboriosam expedita illum doloremque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus doloribus quia inventore unde eum dolore mollitia ex eaque modi, dolor quos deserunt reprehenderit ut nobis laboriosam expedita illum doloremque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus doloribus quia inventore unde eum dolore mollitia ex eaque modi, dolor quos deserunt reprehenderit ut nobis laboriosam expedita illum doloremque.
                </p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus doloribus quia inventore unde eum dolore mollitia ex eaque modi, dolor quos deserunt reprehenderit ut nobis laboriosam expedita illum doloremque.</p>
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
            name="Path Finding Algorithm Using Python"
            github="https://github.com/Shirodeep/Use-Of-Path-Finding-Algorithm-python/tree/master"
            />
            < Project 
            img="./images/tetrisgame.png" 
            name="Tetris Game Using Python"
            github="https://github.com/Shirodeep/Tetris-using-python.git"
            />
            < Project 
            img="./images/macncoffee.jpeg" 
            name="Code of this page"
            github="https://github.com/Shirodeep/my-website.git"
            />
             < Project 
            img="./images/nodeExpressMongo.jpg" 
            name="Blog site"
            github="https://github.com/Shirodeep/Blogsite.git"
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
            <div>
                <h1>To contact me.</h1>
                <input type="email"/>
                <textarea></textarea>
                <input type="submit" value="Submit"/>
            </div>
            <ul className="contact-list">
                <li><a href="https://github.com/shirodeep"><i className=" fa fa-github"></i></a></li>
                <li><a href="https://linkedin.com/carlousMarkus"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="https://twitter.com/carlous"><i className="fa fa-twitter"></i></a></li>
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