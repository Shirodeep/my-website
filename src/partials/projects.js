import React from "react";

export default function Project(values){
    let badgeText
    if (values.item.status.value === 0){
        badgeText = "SOLD OUT"
    }else if(values.item.status.location === 1){
        badgeText = "ONLINE"
    }
    return(<div className="project-handler">
            {badgeText === null ? <React.Fragment></React.Fragment> :<div className="status">{badgeText}</div>}
            <img className="image-for-projects" src={values.item.img} height="200px" width="230px" alt="mac andd coffee"/>
            <p>{values.item.name}</p>
            <div className="rating">   
                <a className="project-github-link" href={values.item.github}><i className="fa fa-github">&nbsp; &nbsp;click for code</i></a>             
                <hr className="hr"/><p>{values.item.projectStatus}</p>
            </div>    
        </div>
    )
}