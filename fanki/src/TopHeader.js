
import React, { Component, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import crd from "./images/crd.png";
import settings from "./CreateFlashcard/manage.png";
import LoginPage from "./LoginPage.js";
import { Button } from 'evergreen-ui';
import { Pane, Avatar } from 'evergreen-ui'
import UserSettings from './UserSettings';
import firebase from 'firebase/app'
import home from './home.png'
import logout from './logout.png'

const TopHeader = (props) => {


    function onLogoutClick () {
        firebase.auth().signOut().then(() => {
            console.log("sign out success")
          // Sign-out successful.
        }).catch((error) => {
            console.log('sign out error')
          // An error happened.
        });
    }

    console.log("in top header", props.user)
      
    
        return (

            <div className="headertop" style = {{"position":"sticky", "backgroundColor":"rgba(67, 90, 111, 0.7)"}}>
      
                        <div style={{"display": "flex", "justifyContent": "center", "width": "100%"}}> 
           
                                <h3>
                                    <Link to={"/"} style={{ "textDecoration": "none" , "color": "whitesmoke", "fontFamily": "Papyrus-Condensed" }}>
                                        <img src={crd} style={{ "height": "30px", "width": "30px"}} alt="decks"></img>STANKI - A Stackoverflow anki using spaced repitition
                                    </Link>
                                
                                </h3>
                        </div>


                        
                        <div style={{"display":"flex","flexDirection":"row"}}>

                        {!props.user && 
                            <>
                                <div style={{"padding":"03px", "position":"absolute", "right": "20px", "marginTop": "-20px"}} > 
                                    <Link  to={"/SignUp"} style={{ "textDecoration": "none" }} >
                                        <Button marginRight={16} appearance="primary" backgroundColor = "rgba(67, 90, 111, 0.7)" border="none" border-radius= "20px">
                                            Create an account
                                        </Button>
                                    </Link> 
                                </div>
                                <div style={{"padding":"03px", "position":"absolute", "right": "180px", "marginTop": "-20px"}} > 
                                    <Link to={"/SignIn"} style={{ "textDecoration": "none" }}>
                                        <Button marginRight={16} appearance="primary" backgroundColor = "rgba(67, 90, 111, 0.7)" border="none" border-radius= "20px">
                                        Login
                                        </Button>
                                    </Link> 
                                </div>
                            </>
                        }

                                {props.user &&    
                                <div>                      
                                        <div style={{"padding":"03px", "position":"absolute", "right": "20px", "marginTop": "-10px","display":"flex","flexDirection":"row"}}>
                                           

                                            <div> 
                                                <Link to={"/decks/"} style={{"textDecoration": "none"}}> 
                                                <img style={{ "height": "30px" , "width":"30px","marginRight":"15px"}} src={home} alt="Create your own flashcards"></img>
                                                </Link> 
                                            </div>

                                            <div> 
                                                <Link to={"/settings/"} style={{"textDecoration": "none", "color": "black"}}> 
                                                <Avatar name="Bill Gates" size={30} marginRight={16} />                                            
                                                </Link>                                                
                                            </div>


                                        <div> <img onClick={onLogoutClick} style={{ "height": "30px" , "width":"30px","marginRight":"15px"}} src={logout} alt="Create your own flashcards"></img></div>

                                            {/* <div> <Button marginRight={16} appearance="primary" backgroundColor = "rgba(67, 90, 111, 0.7)" border="none" border-radius= "20px"
                                            onClick={onLogoutClick}>Logout</Button>   </div> */}
                                                
 
                                                                     
                                        </div>
                                </div>
                                    }

                                


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

export default TopHeader;
