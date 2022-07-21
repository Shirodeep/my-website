import React from "react"

function MyFunction(){
    const date = new Date()
    const day = date.getDay()
    const month = date.getMonth()
    const year = date.getFullYear()
    const hours = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    var time = date.toUTCString()
    var result, result1
    switch(day){
        case 0:
            result = "Sunday"
            break;
        case 1:
            result = "Monday"
            break;
        case 2:
            result = "Tuesday"
            break;
        case 3:
            result = "Wednesday"
            break;
        case 4:
            result = "Thursday"
            break;
        case 5:
            result = "Friday"
            break;
        case 6:
            result = "Saturday"
            break;
    }
    switch(month){
        case 0:
            result1 = "January"
            break;
        case 1:
            result1 = "Feburary"
            break;
        case 2:
            result1 = "March"
            break;
        case 3:
            result1 = "April"
            break;
        case 4:
            result1 = "May"
            break;
        case 5:
            result1 = "June"
            break;
        case 6:
            result1 = "July"
            break;
        case 3:
            result1 = "August"
            break;
        case 4:
            result1 = "September"
            break;
        case 5:
            result1 = "October"
            break;
        case 6:
            result1 = "December"
            break;
    }
    return (
        <p><sub>{hours}:{minute} {result} {result1} {year}</sub></p>
    )
}


export default function Footer(){
    return(
        <footer className="footer">
            <div>&copy; Copyright All rights reserved.</div>
            < MyFunction />
        </footer>
    )
}   
