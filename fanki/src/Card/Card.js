import React, { Component, useEffect } from 'react';
import './Card.css';

const Card = (props) => {





    useEffect(() => {
        console.log('use effect is loaded')
        window.document.querySelector(".flipdiv.v").onclick = function flipdivClicked(e) {
            if (/\bshowBack\b/.test(this.className)) {
                this.className = this.className.replace(/ ?\bshowBack\b/g, "");
            }
            else {
                this.className += " showBack";
            }
            }
    }, [])
      
    
      
    
    
    return (

    

    // <div className="card-container">
        <div className="flipdiv v">
            <div className="front">

                <div className="eng"> {props.front} </div>
            </div>



            <div className="back">

                <div className="han"> {props.back} </div>

            </div>



        </div>


    // </div>

)}

export default Card;