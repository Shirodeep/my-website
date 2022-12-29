import React, { useRef } from "react";
import Project from "./projects";
import ProjectsData from "./ProjectsData";
import emailjs from "@emailjs/browser";
function MyHome() {
    return (
        <div className="home" id="home">
            <h1 className="heading">About Myself</h1>
            <div className="home-content">
                <img src="./images/logo.jpg" className="image-for-home" alt="logo-of-site" />
                <div className="infos">

                    <p className="my-words">
                        Internet influenced me and want to explore more.
                        From that day I am interested in technical fields and want to do everything I can in these feilds.
                        I am always in front of laptop I got after high school and I found interesting devices, tools, technology.
                        Nowadays I like to do small projects to achieve my dream of being software engineer.

                    </p>
                    <p className="my-words2">Passionate in coding and adventurer.</p>

                </div>
            </div>
        </div>
    )
}


function Projects() {
    const projectsA = ProjectsData.map(item => {
        return (
            < Project
                item={item}
                key={item.name}
            />)
    })
    return (
        <div className="project-text" id="projects">
            {projectsA}
        </div>
    )
}

function About() {
    return (
        <div className="about" id="about">
        </div>
    )
}

function Contact() {
    const Form = useRef();
    const emailSender = (e) => {
        
        e.preventDefault();
        emailjs.sendForm("service_xt6pcru", "template_o89a4ti", Form.current, "iqnBKruf4WMldh7U7")
            .then((result) => {
                console.log(result.text);
                console.log("message-sent");
                document.getElementById("name").value = " ";
                 document.getElementById("email").value = " "; 
                 document.getElementById("message").value= " ";
            },
                (error) => {
                    console.log(error);
                })
    }
    return (
        <div className="contact" id="contact">
            <div className="email-holder">
                <h1>To contact me.</h1>
                <div name="EmailForm">
                    <form className="contact-message" ref={Form} onSubmit={emailSender}>
                        <div className="first-box" id="first-box1">
                            <label name="name" className="label1" htmlFor="name">Name:</label>
                            <input type="text" id="name" placeholder="name" className="inputs1" name="name" required />
                        </div>
                        <div className="first-box">
                            <label name="email" className="label1" htmlFor="email">Email:</label>
                            <input type="email" id="email" placeholder="abc@xyz.com" className="inputs1" name="email" required />
                        </div>
                        <div className="second-box">
                            <label name="message" className="label2" htmlFor="message">Message:</label>
                            <textarea id="message" className="inputs2" placeholder="@Example: This webpage is good" rows={5} cols={10} name="message" required></textarea>
                        </div>
                        <div className="submit-button"><input type="submit" value="Submit" className="inputs" /></div>
                    </form>
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

export default function MainContainer() {
    return (
        <div>
            < MyHome />
            <h1 className="projects-done">Projects completed</h1>
            < Projects />
            < About />
            < Contact />
        </div>)
}