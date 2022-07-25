import MainComponent from "./partials/mainComponent"
import Header from "./partials/header"
import Footer from "./partials/footer"
import React from "react"
import ReactDOM from "react-dom"


function Container(){
    return (
        <div>
            < Header />
            < MainComponent />
            < Footer />
        </div>
    )
}
ReactDOM.render(
    <Container />, document.getElementById("main")
)


