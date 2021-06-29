import React, {Component} from 'react';
import login from "./images/gogole.png";
import firebase from 'firebase/app'
import "firebase/auth"


// const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()


class LoginPage extends Component{
    constructor(){
      super();
      this.state={
        speed:10
      };
    }


    componentWillMount(){
    }

   componentDidMount(){

//     firebase.auth().createUserWithEmailAndPassword("111@111.com", "111111")
//   .then((userCredential) => {
//     // Signed inc
//     var user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ..
//   });

// firebase.auth().signInWithEmailAndPassword("111@111.com", "111111")
//   .then((userCredential) => {
//     // Signed in
//     var user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//   });






   }

   signInWithGoogle = () => {
    firebase.auth().signInWithPopup(googleProvider).then((res) => {
      console.log(res.user)
    }).catch((error) => {
        console.log('error thrown!!!!')
      console.log(error.message)
    })
    }


   render(){
    return (
        <div style={{"display": "flex", "flexDirection": "row","justify-content": "flex-end", "color": "black", "marginRight":"15px"}}>

                        <div>  
                            <img onClick={this.signInWithGoogle} style={{"height":"40px"}}src ={login} alt = " Signin with GOOGLE"></img>  
                        
                        </div>

        </div>

    );
  
   }
  }
  
export default LoginPage;