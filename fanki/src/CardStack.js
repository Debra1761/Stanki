
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import crd from "./images/crd.png";
import mind from './mind.png'
import { Tooltip, InfoSignIcon } from 'evergreen-ui'
import {toaster} from "evergreen-ui";
import firebase from 'firebase/app'



class CardStack extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }


    componentDidMount() {

    }

    onCreateClick = () => {
        console.log("STANKI allows learners to organize decks, add flashcards with images, and collaborate with multiple learners for real-time content deployment.")
    }

    render() {
        return (
            <div style={{ "display": "flex", "flexDirection": "row", "justify-content": "center"}}>
                    <div>

                    {/* <h3> Start leaning today</h3> */}

                        {
                        this.state.user? 
                            <Link to={"/decks/"} style={{"textDecoration": "none", "color": "black"}}> 
                                    <div><img style={{ "height": "100px" , "width":"100px"}} src={mind} alt="Create your own flashcards"></img> </div>             
                            </Link>
                            :
                            <Link to={"/decks/"} onClick={ (event) => {
                                event.preventDefault()
                                toaster.warning("you have to login to use the brain")
                                } } style={{"textDecoration": "none", "color": "black"}}> 
                                <div><img style={{ "height": "100px" , "width":"100px"}} src={mind} alt="Create your own flashcards"></img> </div>             
                            </Link>
                        }

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














