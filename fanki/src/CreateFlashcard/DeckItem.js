import React, { Component } from 'react';
import deck from "./deck.png";
import delete1 from "./delete1.png";
import './CreateFlashcard.css'
import { Link } from "react-router-dom";
import PopupCard from './PopupCard'


class DeckItem extends Component {
    constructor() {
        super();
        this.state = {
            speed: 10,
            showDeleteButton: false
        };

    }


    componentWillMount() {
    }

    componentDidMount() {

    }

    parentCallback = (vals) => {
        console.log('inside parent', vals)
    }

    onDeleteClick = () => {
        console.log("on delete click", this.props.deck.id)
        this.props.databaseRef.child("decks").child(this.props.deck.id).remove();
        console.log('successfully removed!')
    }

    showcardsnow = () => {

        console.log(" new flashcard should appear  ")
    }





    render() {


        return (
            <div onMouseEnter={() => this.setState({showDeleteButton: true})} onMouseLeave={() => this.setState({showDeleteButton: false})}>

                        {this.state.showDeleteButton &&    <div  style={{"z-index":10000}}>
                            <img  onClick={this.onDeleteClick} style={{ "height": "15px","display":"flex", "margin-left":"auto","margin-right":"30px"}} src={delete1} alt="Create your own flashcards"></img>
                        </div>}




                <Link to={"/decks/"+this.props.deck.deck_name} style={{"textDecoration":"none"}} >
                    <div onClick={this.showcardsnow} className="btn-custom">


                        <div className="btn-custom1" style={{ "display": "flex", "flexDirection": "column", "backgroundColor": "#429777" ,"height": "100px", "width": "75px", "padding": "10px", "color": "black", "borderRadius": "10px" }}>

                            <img style={{"height":"40px","width":"40px", "alignSelf":"center"}} src={deck} alt="Create your own flashcards"></img>
                                    <div style= {{"textDecoration":"none", "alignSelf":"center", "-webkit-text-emphasis":"triangle", "padding":"10px"}}> 
                                        {this.props.deck.deck_name}
                                    </div>

                        </div>
                    </div>
                </Link>



                {/* {this.state.showDeleteButton &&  */}
                {/* <div  style={{"z-index":10000}}>
                            <img  onClick={this.onDeleteClick} style={{ "height": "15px"}} src={delete1} alt="Create your own flashcards"></img>
                </div> */}
                {/* } */}

            </div>
        );

    }
}

export default DeckItem;










// l=[]
// l.map((x)=> console.log(x))