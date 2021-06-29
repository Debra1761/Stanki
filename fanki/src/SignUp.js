import React, {Component, useState} from 'react';
import { Pane, Avatar, SearchInput } from 'evergreen-ui';
import LoginPage from './LoginPage';
import { Tooltip, InfoSignIcon } from 'evergreen-ui'

class SignUp extends Component{
    constructor(){
      super();
      this.state={
        speed:10,
        value:""
      };
    }


    componentWillMount(){
     
    }

   componentDidMount(){
   }
  


   render(){
    
    return (
      <div style={{"display":"flex","alignSelf":"center"}}>

          <div style={{"backgroundColor":"antiquewhite","width":"350px","marginLeft":"500px","marginTop":"100px","backgroundColor" : "white", "color":"black","position":"absolute"}}>
              
                                        <div style={{"display":"flex","flexDirection":"column", "alignItems":"center","padding":"20px","paddingBottom":"100px",'color':"black", "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>

                                        <h3>CREATE AN ACCOUNT </h3>
                                            <div style={{"paddingTop":"25px"}}> 
                                            
                                            
                                            <Avatar name="Bill Gates" size={60} marginRight={16} /> </div>
                                                    <div style={{"paddingTop":"25px"}}> <input style={{"height":"25px","width":"250px"}} type="text" placeholder="Enter your Username" /> 
                                                        <Tooltip content="STANKI allows learners to organize decks, add flashcards with images, and collaborate with multiple learners.">
                                                                <InfoSignIcon />
                                                            </Tooltip>
                                                    
                                                    </div>
                                            
                                            <div style={{"paddingTop":"25px"}}> <input style={{"height":"25px","width":"250px"}} type="text" placeholder="Enter your Email" /> 
                                            <Tooltip content="STANKI allows learners to organize decks, add flashcards with images, and collaborate with multiple learners.">
                                                                <InfoSignIcon />
                                                            </Tooltip>
                                             </div>


                                            <div style={{"paddingTop":"25px"}}> <input  style={{"height":"25px","width":"250px"}} type="text" placeholder="Enter your password" /> 
                                            <Tooltip content="STANKI allows learners to organize decks, add flashcards with images, and collaborate with multiple learners." hideDelay ="100">
                                                                <InfoSignIcon />
                                                            </Tooltip>
                                             </div>


                                          <button className="btn btn-default" type="submit" >Login</button>   

                                         



                                               <span  style={{"alignSelf":"center","paddingTop":"50px", "fontSize":"12px","paddingBottom":"10px"}}> or sign up using </span>     

                                               <div><LoginPage/></div>                                    
                                        </div>
          </div>
      </div>
    );
  
   }
  }
  
export default SignUp;



// l=[]
// l.map((x)=> console.log(x))