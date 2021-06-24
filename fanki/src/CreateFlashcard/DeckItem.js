import React, { Component } from 'react';
import deck from "./deck.png";
import delete1 from "./delete1.png";
import cardno from "./p_card.png";
import './CreateFlashcard.css'
import { Link } from "react-router-dom";
import PopupCard from './PopupCard';
import del from "./del.png";
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class DeckItem extends Component {
    constructor() {
        super();
        this.state = {
            speed: 10,
            showDeleteButton: false,
            numFlashcards: 0
        };

    }


    componentWillMount() {
    }

    componentDidMount() {
        this.props.databaseRef.child("flashcards").child(this.props.deck.deck_name).on("value", (snapshot) => {
            console.log("blah:", snapshot.val(), this.props.deck.deck_name)

            var dictionary = snapshot.val() 

            if(dictionary) {
            var deckname = Object.keys(dictionary).map(function(key){
                return dictionary[key];
            });

            const numFlashcards = deckname.length;
            this.setState({numFlashcards: numFlashcards})
        }
        else {
            this.setState({numFlashcards: 0})
        }
        })
    }

    notification = () => {
        toast.error(this.props.deck.deck_name+ " deck deleted succesfully!")
    }

    parentCallback = (vals) => {
        console.log('inside parent', vals)
    }

    onDeleteClick = () => {
        console.log("on delete click", this.props.deck.id)
        this.props.databaseRef.child("decks").child(this.props.deck.id).remove();
        this.notification()
    }

    showcardsnow = () => {
        console.log(" new flashcard should appear  ")
    }

        



    render() {
        const createdAt = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(this.props.deck.create_at)
        // const createdAt = Date(create_at*1000);
        console.log(" where is the converted time", createdAt)
        return (
            
            <div style={{"display":"flex", "flexDirection":"row", "padding":"70px","justifyContent":"end"}}onMouseEnter={() => this.setState({showDeleteButton: true})} onMouseLeave={() => this.setState({showDeleteButton: false})}>
                    <ToastContainer />
                        {this.state.showDeleteButton &&                          
                        <div  style={{"zIndex":10000}}>
                            <img  onClick={this.onDeleteClick} style={{ "height": "15px"}} src={del} alt="Create your own flashcards"></img>
                            
                        </div>
                        }

                <Link to={"/decks/"+this.props.deck.deck_name} style={{"textDecoration":"none"}} >                  
                    <div onClick={this.showcardsnow} className="btn-custom">
                                <div className="btn-custom1" style={{
                                                                    "display": "flex", 
                                                                    "flexDirection": "row", 
                                                                    "alignItems":"center", 
                                                                    "backgroundColor": "white" ,
                                                                    "height": "auto", 
                                                                    "width": "500px", 
                                                                    "padding": "20px", 
                                                                    "color": "black", 
                                                                    "borderRadius": "10px" , 
                                                                    "fontSize":"15px",
                                                                    "boxShadow": "0 4px 6px 0 rgba(0,0,0,0.24), 0 6px 18px 0 rgba(0,0,0,0.19)"}} >

                                                <div style={{"display": "flex", "flexDirection": "row"}}>
                                                    <img style={{"height":"20px","width":"20px", "alignSelf":"center", "padding":"10px"}} src={cardno} alt="no of cards"></img><h4><h5>{this.state.numFlashcards} cards</h5></h4> 
                                                    <img style={{"height":"50px","width":"50px", "alignSelf":"center", "padding":"10px"}} src={deck} alt="Create your own flashcards"></img>
                                                    <span style={{ "alignSelf":"center", "padding":"10px"}}><h3>{this.props.deck.deck_name}</h3></span>
                                               </div>
                                                <div style={{"display": "flex", "flexDirection": "column", "paddingLeft":"5px", "paddingLeft":"25px","fontSize":"13px","fontFamily": 'Iowan Old Style' }}>
                                                    {/* <span> created on: {this.props.deck.create_at}</span>
                                                    <span> description: {this.props.deck.description} </span>
                                                    <span> last modified: {moment(this.props.deck.create_at).toLocaleString()}</span> */}

                                                    <table>
                                                     <tbody>
                                                            <tr id="1"> 
                                                                <td> created on: </td>
                                                                <td> {createdAt}</td>
                                                            </tr>
                                                            <tr id="2">
                                                                <td> description: </td>
                                                                <td>{this.props.deck.description}</td>
                                                            </tr>
                                                            {/* <tr id="3">
                                                                <td> last modified:</td>
                                                                <td>{createdAt}</td>
                                                            </tr> */}
                                                        </tbody>


                                                    </table>
                                                </div>

                                </div>
                    </div>
                </Link>
            </div>
        );

    }
}

export default DeckItem;










// l=[]
// l.map((x)=> console.log(x))