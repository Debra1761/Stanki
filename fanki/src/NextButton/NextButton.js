import React, { Component } from 'react';
import './NextButton.css';

class NextButton extends Component {
    constructor(props) {
        super(props);
        this.nextcard = this.nextcard.bind(this);
    }

    nextcard() {
        this.props.nextcard();

    }

    render(props) {
        return (

            <div className="buttonContainer">

                <button className="btn" onClick={this.nextcard}>  Next  </button>

            </div>



        )
    }
}



export default NextButton;