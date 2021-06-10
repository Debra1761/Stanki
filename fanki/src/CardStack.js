
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import crd from "./images/crd.png";
import mind from './mind.png'



class CardStack extends Component {

    onCreateClick = () => {
        console.log("button clicked")
    }

    render() {
        return (
            <div style={{ "display": "flex", "flexDirection": "row", "justify-content": "center"}}>
                <div>

                        <Link to={"/create/"} style={{"textDecoration": "none", "color": "black"}}> 
                                 <div><img style={{ "height": "100px" , "width":"100px"}} src={mind} alt="Create your own flashcards"></img> </div>
                        </Link>

                </div>
            </div>
        );

    }
}

export default CardStack;














