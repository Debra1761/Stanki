
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import crd from "./images/crd.png";
import LoginPage from "./LoginPage.js";

class TopHeader extends Component {

    render() {
        return (




            <div className="headertop" style = {{"position":"sticky", "backgroundColor":"rgba(67, 90, 111, 0.7)"}}>
      
                        <div> 
           
                                <h3>
                                    <Link to={"/"} style={{ "textDecoration": "none" , "color": "whitesmoke", "font-family": "Papyrus-Condensed" }}>
                                        <img src={crd} style={{ "height": "30px", "width": "30px"}} alt="decks"></img>STANKI - A Stackoverflow anki using spaced repitition
                                    </Link>
                                
                                </h3>
                        </div>

                        <div style={{"display":"flex","flexDirection":"row"}}>

                                <div style={{"padding":"10px"}}> SignIn </div>
                                <div style={{"padding":"10px"}}> SignUp </div>


                        </div>

                           
                        

                        {/* <div style={{}}>
                            <LoginPage/>
                        </div> */}

     </div>




            
//             <div style={{ "display": "flex", "flex-flow": "flex-end", "color": "white" }}>
//                 {/* <img src={brain} alt="brain" /> */}
// SEARCH BITTON

//             </div>
        );

    }
}

export default TopHeader;
