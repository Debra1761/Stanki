import React, { Component, useState, createRef } from 'react';
import { Pane, Avatar, SearchInput } from 'evergreen-ui';
import LoginPage from './LoginPage';
import ProfilePicture from "profile-picture"
import "profile-picture/build/ProfilePicture.css"
import { Tooltip, InfoSignIcon } from 'evergreen-ui'

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
                                {/* <Avatar name="Bill Gates" size={100} />  */}

                                  <ProfilePicture
                                            ref={this.profilePictureRef}
                                            useHelper={true}
                                            debug={true}
                                            frameFormat = "circle"
                                            frameSize = "50px"
                                            backgroundColor ="pink"
                                            image ={<Avatar name="Bill Gates" size={100} /> }
                                     />
                            </div>

                            <div style={{ "paddingTop": "5px", "paddingBottom": "15px", "fontFamily": "Georgia-Italic" }}> Username </div>

                        </div>



                        <div style={{ "paddingTop": "50px" }}>
                            <div className="inline-text_copy inline-text_copy--active" style={{ "paddingTop": "25px" }}> Email ID :  <input  className="inline-text_input inline-text_input--rest" style={{ "height": "25px", "width": "250px","border": "none" }} type="text" placeholder="Email" />
                            </div>


                            <div className="inline-text_copy inline-text_copy--active" style={{ "paddingTop": "25px" }}> Password :<input  className="inline-text_input inline-text_input--rest" style={{ "height": "25px", "width": "250px","border": "none"  }} type="text" placeholder="password" />
                            </div>

                        </div>




                        <div style={{"marginTop":"80px","marginBottom":"30px"}}> 
                            <button className="btn btn-default" type="submit" >Update</button>
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