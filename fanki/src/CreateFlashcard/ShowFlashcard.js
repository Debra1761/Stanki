
import React, { Component, useEffect, useState } from 'react';
import './CreateFlashcard.css'
import { Link } from "react-router-dom";
import Card from "../Card/Card.js";
import manage from "./manage.png";
import addflashcard from "./addflashcard.png";
import settings from './settings.gif';

const ShowFlashcard = (props) => {

    const [flashcards, setFlashcards] = useState([]);
    const [counter, setCounter] = useState(0);

    const onNextClick = () => {
        if (counter == flashcards.length - 1) {
            setCounter(0)
        }
        else {
            setCounter(counter + 1)
        }
    }


    useEffect(() => {
        console.log('use effect is loaded')
        console.log("url params:", props.match.params)

        props.databaseRef.child("flashcards").child(props.match.params.deckname).on('value', snap => {
            console.log('this state', flashcards)
            setFlashcards(snap.val())
            console.log("in showflashcard", snap.val())


            // var dictionary = snap.val() 

            // var deckname = Object.keys(dictionary).map(function(key){
            //     return dictionary[key];
            // });

            // this.setState({
            // decks: deckname
            // })

        })




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






        <div>


            <Link to={"/decks/" + props.match.params.deckname + "/add"} style={{ "display": "flex", "justify-content": "flex-start", "marginLeft":"50px","textDecoration":"none"}}>
                {/* onClick={this.onAddClick} */}
                        <div style={{ "display": "grid","fontSize":"12px" }}>
                            <img src={addflashcard}style={{"height":"50px","width":"50px"}} alt="Create your own flashcards"></img>
                                                        Add flashcard
                        </div>

            </Link>



                    <div style={{"display":"flex","flexDirection":"row","justify-content":"center"}}> 
                        
                        
                            <h3 style= {{"text-transform":"uppercase"}}>{props.match.params.deckname} </h3>

                            <Link to={"/decks/" + props.match.params.deckname + "/add"} style={{"textDecoration":"none"}}>
                                {/* onClick={this.onAddClick} */}
                                <div>
                                    <img src={manage} style={{ "height": "25px" }} alt="Create your own flashcards"></img>
                                                            
                                                    </div>

                            </Link>
                        
                    </div> 

            <div className="flipdiv v">

                

                <div className="front">
                    <h5 style={{"color":"yellow"}}>Front</h5>
                    <div> 
                        
                        
                        {flashcards.length > 0 && flashcards[counter]['front']} 
                    </div>
                </div>



                <div className="back">
                    <h5 style={{"color":"yellow"}}>Back</h5>
                    <div > 
                        {flashcards.length > 0 && flashcards[counter]['back']} 
                    
                    </div>

                </div>
            </div>
            
             <div style= {{"display":"flex","flexDirection":"column","align-items":"center","marginTop":"10px","font-family": "fantasy" }}> 
                
                
                {counter+1}/{flashcards.length}
             
                 <button onClick={onNextClick} className="btn" style={{ "marginTop": "50px" }} >  Next  </button>
            <div/>






        </div>
        {/* // <div className="flipdiv v">
        // //     Deck name: {props.match.params.deckname}
        // //     {flashcards!==null && flashcards[counter]['front']}
        // //     <button onClick={onNextClick}>next</button> */}



     </div>


        // </div>

    )
}

export default ShowFlashcard;