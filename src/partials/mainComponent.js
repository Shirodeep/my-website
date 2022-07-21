import React from "react";

function MyHome(){
    return(
        <div className="home" id="home">
           <div  className="infos">
                <h1 className="heading">Home</h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus doloribus quia inventore unde eum dolore mollitia ex eaque modi, dolor quos deserunt reprehenderit ut nobis laboriosam expedita illum doloremque.</p>
           </div>
            <img src="./images/logo.jpg" className="image-for-home"/>
        </div>      
    )
}

// function ProjectPart(){
//     return(
            
//     )
// }

function Project(){
    return (
        <div className="project-text" id="home">
            <div className="project-handler">
                <img className="image-for-projects" src="./images/macncoffee.jpeg" height="200px" width="230px" alt="mac andd coffee"/>
                <img src="images/stars-png-616.png" width="10px" height="10px"/>
                <h2>Web project using react</h2>
            </div>
            <div className="project-handler">
                <img className="image-for-projects" src="./images/macncoffee.jpeg" height="200px" width="230px" alt="mac andd coffee"/>
                <h2>Web project using react</h2>
                <img src="images/stars-png-616.png" width="10px" height="10px"/>

            </div>
            <div className="project-handler">
                <img className="image-for-projects" src="./images/macncoffee.jpeg" height="200px" width="230px" alt="mac andd coffee"/>
                <h2>Web project using react</h2>
                <img src="images/stars-png-616.png" width="10px" height="10px"/>
            </div>
            <div className="project-handler">
                <img className="image-for-projects" src="./images/macncoffee.jpeg" height="200px" width="230px" alt="mac andd coffee"/>
                <h2>Web project using react</h2>
                <img src="images/stars-png-616.png" width="10px" height="10px"/>
            </div>
            <div className="project-handler">
                <img className="image-for-projects" src="./images/macncoffee.jpeg" height="200px" width="230px" alt="mac andd coffee"/>
                <h2>Web project using react</h2>
                <img src="images/stars-png-616.png" width="10px" height="10px"/>
            </div>
        </div>
        )
} 

function About(){
    return(
        <div className="about">
            <h1>This is all about me.</h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus doloribus quia inventore unde eum dolore mollitia ex eaque modi, dolor quos deserunt reprehenderit ut nobis laboriosam expedita illum doloremque.</p>
        </div>
    )
}

function Contact(){
    return(
        <div className="contact">
            <h1>To contact me go through the below link.<hr /></h1>
            <ul className="contact-list">
                <li><a href="https://github.com/shirodeep">Github</a></li>
                <li><a href="https://linkedin.com/carlousMarkus">LinkedIn</a></li>
                <li><a href="https://twitter.com/carlous">Twitter</a></li>
            </ul>
        </div>
    )
}

export default function MainContainer(){
    return (
    <div>
        < MyHome />
        < Project />
        < About />  
        < Contact />    
    </div>)
}