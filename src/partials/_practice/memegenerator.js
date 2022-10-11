import React from "react";
import memeValue from "./_practice/memegeneratorpracticce.js";
import ReactDOM from "react-dom";
function AppP() {
    let  [random, setrandom] = React.useState(0)
    let  [value, setValue] = React.useState("")
    function addItem(){
        setrandom((frandom)=>{
            frandom ++
            return frandom
        })
        setValue((realValue)=>{
            realValue = memeValue.data.memes[random].url
            console.log(realValue)
            return realValue
        })

    }
    
    // console.log(value)
    return (
        <React.Fragment>
            <button onClick={addItem}>Button ADD</button>
            <div><img src={value} alt ="whad" height='200px' width="200px"/></div>
        </React.Fragment>
    )
}
ReactDOM.render(<AppP/>, document.getElementById("memegenerator"))