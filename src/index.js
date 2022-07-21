import React from 'react'
import ReactDOM from 'react-dom'
import Container from "./app"
 
function PageElement(){
    return(
        <div>
            < Container />
        </div>
    )
}

ReactDOM.render(
    <PageElement />, document.getElementById("main")
)