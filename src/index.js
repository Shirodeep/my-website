import React from "react";
import Home from "./partials/home";
import ReactDOM from "react-dom/client";
function Container(){
    
    return (
       <Home/>
    )
}
let createroot = ReactDOM.createRoot(document.getElementById("main"))
createroot.render(
    <Container />
)


