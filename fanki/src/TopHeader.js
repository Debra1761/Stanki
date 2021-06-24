
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import crd from "./images/crd.png";
import LoginPage from "./LoginPage.js";

class TopHeader extends Component {

    render() {
        return (




            <div  style = {{"position":"sticky", "display":'flex',"flexDirection":"row", "justifyContent":"center"}}>

      
                        <div>
           
                                <h3 style={{ "text-align": "center", "padding": "20px", "color": "black", "font-family": "fantasy" , "margin": 0}}>
                                    <Link to={"/"} style={{ "textDecoration": "none" }}>
                                        <img src={crd} style={{ "height": "30px", "width": "30px"}} alt="decks"></img>STANKI - A Stackoverflow anki using spaced repitition
                                    </Link>
                                
                                </h3>

                           
                        </div>



                        <div style={{}}>
                            <LoginPage/>
                        </div>

     </div>




            
//             <div style={{ "display": "flex", "flex-flow": "flex-end", "color": "white" }}>
//                 {/* <img src={brain} alt="brain" /> */}
// SEARCH BITTON

//             </div>
        );

    }
}

export default TopHeader;
