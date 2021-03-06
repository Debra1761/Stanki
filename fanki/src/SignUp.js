import React, {Component, useState} from 'react';
import { Pane, Avatar, SearchInput } from 'evergreen-ui';
import LoginPage from './LoginPage';
import { Tooltip, InfoSignIcon } from 'evergreen-ui'
import firebase from 'firebase/app'
import {toaster} from "evergreen-ui";
import mind from './mind.png';
import { Link, useHistory } from "react-router-dom";

const SignUp = (props) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory();


   function onSignUpClicked () {
     console.log("on Signup clicked", email)
     let username = email + "@stanki.com"
    firebase.auth().createUserWithEmailAndPassword(username, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log("sign up success:", user)
      toaster.success("signed in successfully")


      props.databaseRef.child("users").child(user.uid).set({
          "uid": user.uid, 
          "email": user.email,
          "username": user.email.split("@")[0]
      }, (error) => {
        if (error) {
            console.log(error)
        }
        else {
          history.push("/") 
            
        }
    });


      // newChildRef.set(deckObject);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("sign up error", errorMessage)
      toaster.warning(errorMessage)
      // ..
    });
   }
  



    
    return (
      <div style={{"display":"flex","alignSelf":"center"}}>

          <div style={{"backgroundColor":"antiquewhite","width":"350px","marginLeft":"500px","marginTop":"100px","backgroundColor" : "white", "color":"black","position":"absolute"}}>
              
                                        <div style={{"display":"flex","flexDirection":"column", "alignItems":"center","padding":"20px","paddingBottom":"100px",'color':"black", "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>

                                        <h3>CREATE AN ACCOUNT </h3>
                                            <div style={{"paddingTop":"25px"}}> 
                                            
                                            <img style={{ "height": "100px" , "width":"100px"}} src={mind} alt="Create your own flashcards"></img>
                                            {/* <Avatar name="Bill Gates" size={60} marginRight={16} />  */}
                                            
                                            </div>
                                                    {/* <div style={{"paddingTop":"25px"}}> <input style={{"height":"25px","width":"250px"}} type="text" placeholder="Enter your Username" /> 
                                                        <Tooltip content="STANKI allows learners to organize decks, add flashcards with images, and collaborate with multiple learners.">
                                                                <InfoSignIcon />
                                                            </Tooltip>
                                                    
                                                    </div> */}
                                            
                                            <div style={{"paddingTop":"25px"}}> <input style={{"height":"25px","width":"250px"}} type="text" placeholder="Enter your Username" value={email} onChange={(e) => setEmail(e.target.value)}/> 
                                            
                                            <Tooltip content="STANKI allows learners to organize decks, add flashcards with images, and collaborate with multiple learners.">
                                                                <InfoSignIcon />
                                                            </Tooltip>
                                             </div>


                                            <div style={{"paddingTop":"25px"}}> <input  style={{"height":"25px","width":"250px"}} type="text" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/> 
                                            <Tooltip content="STANKI allows learners to organize decks, add flashcards with images, and collaborate with multiple learners." hideDelay ="100">
                                                                <InfoSignIcon />
                                                            </Tooltip>
                                             </div>


                                          <button className="btn btn-default" type="submit" onClick={onSignUpClicked}>Sign Up</button>   

                                         



                                               <span  style={{"alignSelf":"center","paddingTop":"50px", "fontSize":"12px","paddingBottom":"10px"}}> or sign up using </span>     

                                               <div><LoginPage/></div>                                    
                                        </div>
          </div>
      </div>
    );
  
   
  }
  
export default SignUp;



// l=[]
// l.map((x)=> console.log(x))