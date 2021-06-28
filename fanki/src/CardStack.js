
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import crd from "./images/crd.png";
import mind from './mind.png'
import { Tooltip, InfoSignIcon } from 'evergreen-ui'



class CardStack extends Component {

    onCreateClick = () => {
        console.log("STANKI allows learners to organize decks, add flashcards with images, and collaborate with multiple learners for real-time content deployment.")
    }

    render() {
        return (
            <div style={{ "display": "flex", "flexDirection": "row", "justify-content": "center"}}>
                    <div>

                    {/* <h3> Start leaning today</h3> */}
                        <Link to={"/decks/"} style={{"textDecoration": "none", "color": "black"}}> 
                                 <div><img style={{ "height": "100px" , "width":"100px"}} src={mind} alt="Create your own flashcards"></img> </div>

                                 
                        </Link>

                    </div>

                    <div>
                                    <Tooltip content="STANKI allows learners to organize decks, add flashcards with images, and collaborate with multiple learners.">
                                                        <InfoSignIcon />
                                     </Tooltip>

                                  
                    </div>
                
                    
                
            </div>
        );

    }
}

export default CardStack;














