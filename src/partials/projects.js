import React from "react"

export default function Project(values){
    console.log(values.img)
    return(
        <div className="project-handler">
            <img className="image-for-projects" src={values.img} height="200px" width="230px" alt="mac andd coffee"/>
            <p>{values.name}</p>
            <div className="rating">   
                <a href={values.github}><i className="fa fa-github">click for code</i></a>             
                <hr/><p>Good project</p>
            </div>    
        </div>
    )
}