
import React, { Component } from 'react';
import login from "./login1.png";


class BottomHeader extends Component {

    render() {
        return (


            <div style={{"display": "flex", "flexDirection": "row","justifyContent": "flex-end", "color": "black", "marginRight":"15px"}}>

                <div>  <img style={{"height":"40px"}}src ={login}></img>  </div>


            </div>
        );

    }
}

export default BottomHeader;
