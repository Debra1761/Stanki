import React, { Component } from 'react';
import PopupCard from './PopupCard'
import DeckItem from "./DeckItem"
import AddFlashcard from './AddFlashcard';

class CreateFlashcard extends Component {
    constructor() {
        super();
        this.state = {
            speed: 10,
            decks: [],
            deckNames: []
        };

        this.databaseUrl = "https://optimal-iris-238613-default-rtdb.europe-west1.firebasedatabase.app/"
        

    }


    componentWillMount() {






    }

    componentDidMount() {

        // const deckname = this.state.decks;

        this.props.app.database(this.databaseUrl).ref().child('decks').on('value', snap => {
            console.log("in createflashcard decks: testing to see if this code worked", snap.val())

            var dictionary = snap.val() 

            var deckname = Object.keys(dictionary).map(function(key){
                return dictionary[key];
            });

            var deckNames = Object.keys(dictionary).map(function(key){
                return dictionary[key]['deck_name'];
            });

            this.setState({
            decks: deckname,
            deckNames : deckNames

            })

        })
    }

    parentCallback = (vals) => {
        console.log('inside parent', vals)
    }


    render() {
        console.log(this.state.decks)

        return (
            <div style={{"display":"flex", "flexDirection":"row","textAlign":"-webkit-end", "marginLeft":"270px"}}>                            
                            
                            <div>
                                <PopupCard decks={this.state.deckNames} parentCallback={this.parentCallback} databaseRef={this.props.app.database(this.databaseUrl).ref()}/>
                            </div>

                            <div>
                                {this.state.decks && this.state.decks.map((deck) => <  DeckItem key={deck["id"]} databaseRef={this.props.app.database(this.databaseUrl).ref()} deck={deck}/>)}
                            </div>                                           
            </div>
        );

    }
}

export default CreateFlashcard;



// l=[]
// l.map((x)=> console.log(x))


