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

        if (this.props.user) {
            var tempState = this;

            this.props.databaseRef.child("users").child(this.props.user.uid).child("decks").on("value", (snap) => {
                console.log("main user promise", snap.val())
                tempState.setState({decks: []})

                console.log('user snap val', snap.val())
    
                if (snap.val()) {
    
                    let userDecks = Object.keys(snap.val());

                    console.log('userDecks', userDecks)

                    var comp = this;
    
                    userDecks.forEach(userDeck => {
                        console.log("userdeck:", userDeck)
    
                        comp.props.databaseRef.child('decks').child(userDeck).once("value", snap => {
                            console.log("blaaaaaaaaa", snap.val())

                            comp.setState({decks: [...comp.state.decks, snap.val()]})
                            console.log('the decks state', comp.state.decks)

                
                            // var dictionary = snap.val() 
                
                            // var deckname = Object.keys(dictionary).map(function(key){
                            //     return dictionary[key];
                            // });
                
                            // var deckNames = Object.keys(dictionary).map(function(key){
                            //     return dictionary[key]['deck_name'];
                            // });
                
                            // comp.setState({
                            // decks: deckname,
                            // deckNames : deckNames
                
                            // })
                
                        })
    
                    })
    
                    // this.props.databaseRef.child('decks').on('value', snap => {
                    //     console.log("in createflashcard decks: testing to see if this code worked", snap.val())
            
                    //     var dictionary = snap.val() 
            
                    //     var deckname = Object.keys(dictionary).map(function(key){
                    //         return dictionary[key];
                    //     });
            
                    //     var deckNames = Object.keys(dictionary).map(function(key){
                    //         return dictionary[key]['deck_name'];
                    //     });
            
                    //     comp.setState({
                    //     decks: deckname,
                    //     deckNames : deckNames
            
                    //     })
            
                    // })
    
    
                }
    
    
                
            })
        }

        

        
    }

    parentCallback = (vals) => {
        console.log('inside parent', vals)
    }


    render() {
        console.log(this.state.decks)

        return (
            <div style={{"display":"flex", "flexDirection":"row","textAlign":"-webkit-end", "marginLeft":"270px", "paddingTop":"20px"}}>                            
                            
                            <div>
                                <PopupCard user={this.props.user} decks={this.state.deckNames} parentCallback={this.parentCallback} databaseRef={this.props.app.database(this.databaseUrl).ref()}/>
                            </div>

                            <div>
                                {this.state.decks && this.state.decks.map((deck) => <  DeckItem key={deck["id"]} user={this.props.user} databaseRef={this.props.app.database(this.databaseUrl).ref()} deck={deck}/>)}
                            </div>                                           
            </div>
        );

    }
}

export default CreateFlashcard;



// l=[]
// l.map((x)=> console.log(x))


