
import React, { Component, useEffect, useState, useRef } from 'react';
import './CreateFlashcard.css'
import { Link } from "react-router-dom";
import Card from "../Card/Card.js";
import manage from "./manage.png";
import deck from "./deck.png";
import addf from './addf.png';
import addflashcard from "./addflashcard.png";
import ManageFlashcard from './ManageFlashcard'
import settings from './settings.gif';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
import "./showflashcard.css";
import add  from './add.png'
import { Portal, Pane, Text, LinkIcon } from "evergreen-ui";


const ShowFlashcard = (props) => {

    const [flashcards, setFlashcards] = useState([]);
    const [counter, setCounter] = useState(0);

    const frontRef = useRef();
    const backRef = useRef();


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
        // console.log("url params:", props.match.params)

        props.databaseRef.child("flashcards").child(props.match.params.deckname).on('value', snap => {

            setFlashcards(snap.val())
            console.log("in showflashcard", snap.val())


            var dictionary = snap.val() 

            var deckname = Object.keys(dictionary).map(function(key){
                return dictionary[key];
            });


            setFlashcards(deckname)

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






        <div style={{"paddingTop":"20px"}}>

            <div style={{"display":"flex","flexDirection":"row","justifyContent":"space-around"}}>


                    <div>
                            <Link to={"/decks/"} style={{ "textDecoration": "none" }}>
                                <img src={deck} style={{ "height": "60px", "width": "60px"}} alt="decks"></img>
                                                                
                            </Link>
                    </div>

                    <div style={{"marginTop":"20px"}}>
                            {/* <Link to={"/decks/" + props.match.params.deckname + "/add"} style={{ "textDecoration": "none" }}>
                            <img src={addf} style={{ "height": "40px", "width": "40px"}} alt="Create your own flashcards"></img>
                                                                Add flashcard
                            </Link> */}
                    </div>

            </div>


            {/* <div style={{ "display": "grid", "fontSize": "12px" }}>
                    <Link to={"/decks/" + props.match.params.deckname + "/add"} style={{ "display": "flex", "justify-content": "flex-start", "marginLeft": "50px", "textDecoration": "none" }}>
                            <img src={addflashcard} style={{ "height": "50px", "width": "50px" }} alt="Create your own flashcards"></img>
                                                        Add flashcard
                    </Link>
            </div> */}





            <div style={{ "display": "flex", "flexDirection": "row", "justify-content": "center" }}>


                <h3 style={{ "text-transform": "uppercase" }}>{props.match.params.deckname} </h3>



                <div>
                    <Link to={"/decks/" + props.match.params.deckname + "/manage"} style={{ "textDecoration": "none" }}>
                        <img src={manage} style={{ "height": "25px" }} alt="Manage your own flashcards"></img>
                    </Link>
                </div>



            </div>

            <div className="flipdiv v">



                <div className="front">
                    <h5 style={{ "color": "green" ,"font-family":"cursive"}}>Front</h5>

                    {flashcards.length > 0 && <ReactQuill 
                                                ref={frontRef}
                                                readOnly={true}
                                                style={{"height": "300px", "border": "none"}} 
                                                value={flashcards[counter]['front']}
                                                modules={{
                                                    toolbar: false,
                                                    }}
                                                name='front'/>}

                </div>



                <div className="back">
                    <h5 style={{ "color": "green" ,"font-family":"cursive"}}>Back</h5>

                    {flashcards.length > 0 && <ReactQuill 
                                                ref={backRef}
                                                readOnly={true}
                                                style={{"height": "300px", "border": "none"}} 
                                                value={flashcards[counter]['back']}
                                                modules={{
                                                    toolbar: false,
                                                    }}
                                                name='back'/>}



                </div>
            </div>

            <div style={{ "display": "flex", "flexDirection": "column", "align-items": "center", "marginTop": "10px", "font-family": "fantasy" }}>


                {counter + 1}/{flashcards.length}

                <button onClick={onNextClick} className="btn" style={{ "marginTop": "50px" }} >  Next  </button>
                <div />


                <Portal>
                        <Pane background="none" padding={24} position="fixed" bottom={0} right={0}>
                        <Link to={"/decks/" + props.match.params.deckname + "/add"} style={{ "textDecoration": "none" }}>
                            <img src={add} style={{ "height": "40px", "width": "40px"}} alt="Create your own flashcards"></img>
                                                              
                            </Link>
                        </Pane>
                </Portal>



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