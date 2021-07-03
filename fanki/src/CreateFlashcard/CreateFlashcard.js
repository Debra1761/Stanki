import React, { Component } from 'react';
import PopupCard from './PopupCard'
import DeckItem from "./DeckItem"
import AddFlashcard from './AddFlashcard';

class CreateFlashcard extends Component {
    constructor() {
        super();
        this.state = {
            speed: 10,
            decks: {},
            deckNames: []
        };

        this.databaseUrl = "https://optimal-iris-238613-default-rtdb.europe-west1.firebasedatabase.app/"
        

    }


    componentWillReceiveProps(nextProps) {

        if ((this.props.user == null) && nextProps.user) {

            console.log('inside receive', this.props.user, nextProps.user)
            var tempState = this;

            this.props.databaseRef.child("users").child(nextProps.user.uid).child("decks").on("value", (snap) => {
                console.log("main user promise", snap.val())
                
                this.setState({decks: {}})
    
                if (snap.val()) {

                    let deckJson = {}

                    let deckIds = Object.keys(snap.val())
                    console.log("deckIds", deckIds)
                    deckIds.forEach(deckId=>deckJson[deckId]={})
    
                    tempState.setState({decks: deckJson })
    
                    console.log('user snap val', snap.val())
    
                    let userDecks = Object.keys(snap.val());

                    console.log('userDecks', userDecks)

                    var comp = this;

    
                    userDecks.forEach((userDeck, index) => {
                        console.log("userdeck:", userDeck)
    
                        comp.props.databaseRef.child('decks').child(userDeck).once("value", snapshot => {
                            console.log("blaaaaaaaaa", snapshot.val())


                            let tempStateDeck = comp.state.decks
                            tempStateDeck[userDeck] = snapshot.val()

                            comp.setState({decks: tempStateDeck})

                            // comp.setState({decks: [...comp.state.decks, snap.val()]})
                            console.log('the decks state', comp.state.decks)
                
                        })
    
                    })



    
                }
                
            })
        }

    }


    componentWillMount() {






    }

    componentDidMount() {
        console.log("createflashcard:", this.props)


        if (this.props.user) {

            console.log('inside receive', this.props.user, this.props.user)
            var tempState = this;

            this.props.databaseRef.child("users").child(this.props.user.uid).child("decks").on("value", (snap) => {
                console.log("main user promise", snap.val())
                

                console.log('user snap val', snap.val())
    
                if (snap.val()) {

                    let deckJson = {}

                    let deckIds = Object.keys(snap.val())
                    console.log("deckIds", deckIds)
                    deckIds.forEach(deckId=>deckJson[deckId]={})

                    tempState.setState({decks: deckJson })
    
                    let userDecks = Object.keys(snap.val());

                    console.log('userDecks', userDecks)

                    var comp = this;
    
                    userDecks.forEach((userDeck, index) => {
                        console.log("userdeck:", userDeck)
    
                        comp.props.databaseRef.child('decks').child(userDeck).once("value", snapshot => {
                            console.log("blaaaaaaaaa", snapshot.val())


                            let tempStateDeck = comp.state.decks
                            tempStateDeck[userDeck] = snapshot.val()

                            comp.setState({decks: tempStateDeck})

                            // comp.setState({decks: [...comp.state.decks, snap.val()]})
                            console.log('the decks state', comp.state.decks)
                
                        })
    
                    })



    
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
                                {Object.keys(this.state.decks).map(key=>this.state.decks[key]) && Object.keys(this.state.decks).map(key=>this.state.decks[key]).map((deck) => <  DeckItem key={deck["id"]} user={this.props.user} databaseRef={this.props.app.database(this.databaseUrl).ref()} deck={deck}/>)}
                            </div>                                           
            </div>
        );

    }
}

export default CreateFlashcard;



// l=[]
// l.map((x)=> console.log(x))


