import React, {Component, useState} from 'react';
import { Pane, Avatar, SearchInput } from 'evergreen-ui';
import LoginPage from './LoginPage';
import { Tooltip, InfoSignIcon } from 'evergreen-ui'

class UserSettings extends Component{
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

                                        <h3>User Settings </h3>
                                            <div style={{"paddingTop":"25px"}}> 
                                            
                                            
                                            <Avatar name="Bill Gates" size={60} marginRight={16} /> </div>
                                                    <div style={{"paddingTop":"25px"}}> Username<input style={{"height":"25px","width":"250px"}} type="text" placeholder="Enter your Username" />                                                                                                
                                                    </div>
                                            
                                                    <div style={{"paddingTop":"25px"}}> EmailID<input style={{"height":"25px","width":"250px"}} type="text" placeholder="Enter your Email" />                                                
                                                    </div>


                                                    <div style={{"paddingTop":"25px"}}> Password<input  style={{"height":"25px","width":"250px"}} type="text" placeholder="Enter your password" />                                            
                                                    </div>


                                          <button className="btn btn-default" type="submit" >Save & Update</button>   

                                        
                                                                  
                                        </div>
          </div>
      </div>
    );
  
   }
  }
  
export default UserSettings;



// l=[]
// l.map((x)=> console.log(x))