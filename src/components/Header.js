import React, { useState } from 'react'
import '../styles/header.css'

function Header(props) {
    const [searchTerm, setsearchTerm] = useState("initialState")

    const data = ["HayDay", "Clash Of Clans", "Boom Beach", "Clash Royale", "Brawl Stars"]

    return (
        <div className="header" >
            <a href="/"> <img src="supercel_logo.png" alt="logo" className="logo"/></a>
            <p className="header_items">OurStory</p>
            <p className="header_items" onClick={() => props.gamesHandler()}>Games</p>
            <p className="header_items">Careers</p>
            <p className="header_items">Support</p>
            <p className="header_items">Safe & Fair Play</p>
            <img src="supercell_id.jpg" alt="" className="supercell_id"/>
            <input type="text" className="search" onChange= {event => {setsearchTerm(event.target.value)}} onClick={props.handleClickInput}/>
            {props.showList ? <div className="input_wrapper">
           {data.filter((val) => {
               if(searchTerm == "") {
                   return val;
               } else if(val.toLowerCase().includes(searchTerm.toLowerCase())) {
                   return val;
               }
           }).map((val,key) => {
               return(
                   <div className="results" key={key}>
                       <p className="result">{val}</p>
                   </div>
               )
           })}
           </div> : null}
            
        </div>
    )
}

export default Header
