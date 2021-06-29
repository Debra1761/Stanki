
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import crd from "./images/crd.png";
import LoginPage from "./LoginPage.js";
import { Button } from 'evergreen-ui';
import { Pane, Avatar } from 'evergreen-ui'
import UserSettings from './UserSettings';

class TopHeader extends Component {
    constructor(){
        super();
        this.state={
          speed:10,
          showUserButton: false
        };
      }
  
  
      componentWillMount(){
      }
  
     componentDidMount(){
     }
    
    render() {
        return (




            <div className="headertop" style = {{"position":"sticky", "backgroundColor":"rgba(67, 90, 111, 0.7)"}}>
      
                        <div style={{"display": "flex", "justifyContent": "center", "width": "100%"}}> 
           
                                <h3>
                                    <Link to={"/"} style={{ "textDecoration": "none" , "color": "whitesmoke", "font-family": "Papyrus-Condensed" }}>
                                        <img src={crd} style={{ "height": "30px", "width": "30px"}} alt="decks"></img>STANKI - A Stackoverflow anki using spaced repitition
                                    </Link>
                                
                                </h3>
                        </div>

                        <div style={{"display":"flex","flexDirection":"row"}}>

                                <div style={{"padding":"03px", "position":"absolute", "right": "20px", "marginTop": "-20px"}}  onclick={() => this.setState({showUserButton: true})}> 
                                    <Link  to={"/SignUp"} style={{ "textDecoration": "none" }} >
                                        <Button marginRight={16} appearance="primary" backgroundColor = "rgba(67, 90, 111, 0.7)" border="none" border-radius= "20px">
                                            Create an account
                                        </Button>
                                    </Link> 
                                </div>
                                <div style={{"padding":"03px", "position":"absolute", "right": "180px", "marginTop": "-20px"}}  onclick={() => this.setState({showUserButton: true})}> 
                                    <Link to={"/SignIn"} style={{ "textDecoration": "none" }}>
                                        <Button marginRight={16} appearance="primary" backgroundColor = "rgba(67, 90, 111, 0.7)" border="none" border-radius= "20px">
                                        Login
                                        </Button>
                                    </Link> 
                                </div>

                                {this.state.showUserButton &&                          
                                        <div style={{"zIndex":10000}}>
                                                <Avatar name="Bill Gates" size={40} marginRight={16} />  
                                                <UserSettings/>   
                                                <button>Logout</button>                       
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
}

export default TopHeader;
