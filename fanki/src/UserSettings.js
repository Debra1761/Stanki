import React, { Component, useState, createRef } from 'react';
import { Pane,Avatar,  SearchInput } from 'evergreen-ui';
import LoginPage from './LoginPage';
import stanki from './stanki.png'
import ProfilePicture from "profile-picture"
import "profile-picture/build/ProfilePicture.css"
import { Button,Tooltip, InfoSignIcon } from 'evergreen-ui';
import  UserAvatar from 'react-user-avatar';


class UserSettings extends Component {
    constructor() {
        super();
        this.profilePictureRef = React.createRef();
        this.state = {
            speed: 10,
            value: "",
            messages: {
                DEFAULT: "Drop your photo here or tap to select.",
                DRAGOVER: "Drop your photo",
                INVALID_FILE_TYPE: "Only images allowed.",
                INVALID_IMAGE_SIZE: "Your photo must be larger than 350px."
              }
        };
    }

    handleUpload() {
        const PP = this.profilePictureRef.current;
        const imageData = PP.getData();
        const file = imageData.file;
        const imageAsDataURL = PP.getImageAsDataUrl();

    }

    componentWillMount() {
    console.log("this is something",this.props.user)
    }

    componentDidMount() {
    }



    render() {

        return (
            <div style={{ "display": "flex", "alignSelf": "center" }}>

                <div style={{ "backgroundColor": "antiquewhite", "width": "400px", "marginLeft": "500px", "marginTop": "100px", "backgroundColor": "white", "color": "black", "position": "absolute" }}>

                    <div style={{ "display": "flex", "flexDirection": "column", "minHeight": "600px", "alignItems": "center", 'color': "black", "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                        <div style={{ "backgroundColor": "pink", "alignItems": "center", "display": "flex", "flexDirection": "column", "width": "400px" }}>
                            <h3>Profile</h3>


                            <div >   

                             {/* <UserAvatar size="100" name={this.props.user.username} /> */}
                                {/* <Avatar name="Bill Gates" size={100} />  */}
                                {/* <Avatar
                                            size={100}
                                            name="Maria Mitchell"
                                            variant="marble"
                                            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
                                 /> */}
                                  <ProfilePicture
                                            ref={this.profilePictureRef}
                                            useHelper={false}
                                            debug={false}
                                            frameFormat = "circle"
                                            frameSize = "10px"
                                            width="50px"
                                            height="50px"
                                            // border={50}
                                            backgroundColor ={"pink"}
                                            image="http://example.com/initialimage.jpg"
                                     />
                            </div>

                            {this.props.user && <div style={{ "paddingTop": "5px", "paddingBottom": "15px", "fontFamily": "Georgia-Italic" }}> {this.props.user.username}</div> }

                        </div>



                        <div style={{ "paddingTop": "50px" , "color":"darkgrey" }}>

                            {this.props.user &&

                            <div className="inline-text_copy inline-text_copy--active" style={{ "paddingTop": "25px" }}> Email ID :  <span className= "inline-text_input inline-text_input--rest" style={{ "height": "25px", "width": "250px","border": "none" }} type="text" placeholder=""> {this.props.user.email} </span> </div>

                            }


                                {this.props.user &&
                            <div className="inline-text_copy inline-text_copy--active" style={{ "paddingTop": "25px" }}> Name :<span  className="inline-text_input inline-text_input--rest" style={{ "height": "25px", "width": "250px","border": "none" , "color":"grey" }} type="text" placeholder=""> {this.props.user.username} </span></div>
                                    }

                        </div>




                        <div style={{"marginTop":"80px","marginBottom":"30px"}}> 
                            <button onClick={this.handleUpload.bind(this)} className="btn btn-default" type="submit" >Update</button>
                       </div>

                       <div style={{"marginTop":"30px","marginBottom":"30px"}}> 
                            <Button style={{"backgroundColor":"#e75480", "height":"30px", "width":"150px","borderColor":"#e75480", "border":"none", "borderRadius":"2px"}} type="submit" >Delete Account</button>
                       </div>


                       



                    </div>
                </div>
            </div>
        );

    }
}

export default UserSettings;



// l=[]
// l.map((x)=> console.log(x))