import React, {Component} from 'react';
import { Pane, Avatar, SearchInput } from 'evergreen-ui';
import LoginPage from './LoginPage';

class SignIn extends Component{
    constructor(){
      super();
      this.state={
        speed:10,
        showDeleteButton: false
      };
    }


    componentWillMount(){
    }

   componentDidMount(){
   }
  


   render(){
    return (
      <div style={{"display":"flex","alignSelf":"center"}}>

      <div style={{"backgroundColor":"antiquewhite","width":"350px","marginLeft":"500px","marginTop":"100px","backgroundColor" : "white", "color":"black"}}>
          
                                    <div style={{"display":"flex","flexDirection":"column", "alignItems":"center","padding":"20px","paddingBottom":"100px",'color':"black", "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>

                                    <h3>Sign in </h3>
                                        <div style={{"paddingTop":"25px"}}> 
                                        
                                        
                                        <Avatar name="Bill Gates" size={60} marginRight={16} /> </div>
                                        <div style={{"paddingTop":"25px"}}> <input style={{"height":"25px","width":"250px"}} type="text" placeholder="Username/Email" />  </div>
                                        <div style={{"paddingTop":"25px"}}> <input  style={{"height":"25px","width":"250px"}} type="text" placeholder="Password" />  </div>
                                      
                                      
                                        <div style={{"alignSelf":"start","paddingLeft":"25px", "paddingTop":"10px","fontSize":"12px"}}>
                                                <input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter"></input>
                                                <label style ={{"color":"grey"}} for="subscribeNews">Keep me signed in on this device?</label>
                                            </div>


                                      <button className="btn btn-default" type="submit" >Sign in</button>   

                                      <div style={{"fontSize":"12px", "alignSelf":"flex-end"}}> forgot <span style={{"color":"blue"}}>password? </span>   </div> 



                                           <span  style={{"alignSelf":"center","paddingTop":"50px", "fontSize":"12px","paddingBottom":"10px"}}> or sign in using </span>     

                                           <div><LoginPage/></div>                                     
                                    </div>
      </div>
  </div>
    );
  
   }
  }
  
export default SignIn;



// l=[]
// l.map((x)=> console.log(x))