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
        <div style={{"display": "flex", "flexDirection": "row","justifyContent": "flex-end", "color": "black", "marginRight":"15px"}}>

                        <div>  
                            <img onClick={this.signInWithGoogle} style={{"height":"40px"}}src ={login} alt = " Signin with GOOGLE"></img>  
                        
                        </div>

        </div>

    );
  
   }
  }
  
export default LoginPage;