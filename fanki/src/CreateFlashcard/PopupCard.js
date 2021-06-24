
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Popup from 'reactjs-popup';
import deck_add from './deck_add.png';
import 'reactjs-popup/dist/index.css';


class PopupCard extends Component {
    constructor() {
        super();
        this.referenc = React.createRef();
        this.state = {
            ExistingDeck: ["React", "Python", "Rust"],
            NewDeck: [],
            NewDeckValue: "",
            Desc : "",
            optionSelected: null
        };
        this.onChangeValue = this.onChangeValue.bind(this);
        this.ExistingDeckisChecked = this.ExistingDeckisChecked.bind(this);
        this.NewDeckisChecked = this.NewDeckisChecked.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.SaveInputValue = this.SaveInputValue.bind(this);
    }

    onChangeValue(event) {
        console.log(event.target.value);
    }

    ExistingDeckisChecked = (event) => {

        this.setState({ optionSelected: event.target.value })
        console.log(event.target.value);
        console.log(this.state.ExistingDeck)
    }
    NewDeckisChecked = (event) => {
        this.setState({ optionSelected: event.target.value })
        console.log("NewDeckisChecked clicked")
    }
    SaveDescValue = (event) =>{
        this.setState({Desc: event.target.value })

    }
    onCreateClick = () => {
        console.log("button clicked")
    }
    SaveInputValue = (event) => {
        this.setState({ NewDeckValue: event.target.value })
        console.log(event.target.value)
    }

    handleSelectChange = () => {

    }


    checkIfDeckExistsInFirebase = () => {

    }

    CheckBeforeCreating = () => {
        if (this.state.NewDeckValue.length == 0) {
            
            alert("Missing input! Please enter the deck name")
        }
        else {

            if (this.props.decks.includes(this.state.NewDeckValue)) {
                alert("Deck already exists")
            }

            else {
                this.CreateButton();
            }
        
        
        }
    }

    CreateButton = () => {
        this.referenc.current.close()
        const updatedArray = [...this.state.ExistingDeck, this.state.NewDeckValue]
        this.setState({ ExistingDeck: updatedArray })

        
        
        var newChildRef = this.props.databaseRef.child("decks").push();
        var key = newChildRef.key

        var deckObject = {
            "id": key,
            "deck_name": this.state.NewDeckValue,
            create_at: Date.now(),
            "description": this.state.Desc
        }

        newChildRef.set(deckObject);



        this.props.parentCallback(this.state.ExistingDeck)
    }

    render() {
        return (
            <div>
                {/* {this.state.ExistingDeck} */}
                <Popup ref={this.referenc} trigger={

                    <img style={{ "height": "45px","width":"45px"}} src={deck_add} alt="Create your own flashcards"></img>
                    

                        } position="bottom right" closeOnDocumentClick>
                    <div style={{"padding":"20px"}}>
                        

                                    <input style={{"height":"25px","width":"150px"}} type="text" placeholder="Enter the deck name!" onChange={this.SaveInputValue}></input>
                                    <input style={{"height":"55px","width":"150px", "marginTop":"20px"}} type="text" placeholder="Description" onChange={this.SaveDescValue}></input>

                                <button onClick={this.CheckBeforeCreating} className="btn btn-default" type="submit">
                                    Create                                                   {/* {this.state.NewDeckValue} */}
                                </button>

                    </div>
                </Popup>

            </div>
        );

    }
}

export default PopupCard;


{/* <div onChange={this.onChangeValue}>
<input type="radio" value="ExistingDeck" name="deck" /> Create on existing deck
<input type="radio" value="NewDeck" name="deck" /> Create a new deck

</div> */}

{/* 
                            <input onChange={this.NewDeckisChecked} type="radio" value="NewDeck" name="deck" /> Create a new deck
                                    {this.state.optionSelected == "NewDeck" &&
                                    <div style={{ "padding": "20px" }}> */}













