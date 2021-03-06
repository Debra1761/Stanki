import './App.css';
import React, { Component } from 'react';
import TopHeader from './TopHeader';
import SearchPage from './SearchPage';
import brain from "./images/brain3.jpg";
import LoginPage from "./LoginPage"
import firebase from 'firebase/app'
import "firebase/auth"
import CardStack from './CardStack'
import Card from './Card/Card.js'
import NextButton from './NextButton/NextButton.js'
import { DB_CONFIG } from './Config/Firebase/db_config.js'
import 'firebase/database'
import py from "./images/py.png";
import js from "./images/js.png";
import java from "./images/java.png";
import mysql from "./images/mysql.png";
import aws from "./images/aws.png";
import HomePage from './HomePage';
import CreateFlashcard from './CreateFlashcard/CreateFlashcard';
import ShowFlashcard from "./CreateFlashcard/ShowFlashcard";
import ManageFlashcard from './CreateFlashcard/ManageFlashcard';
import Signup from './SignUp';
import SignIn from './SignIn';
import UserSettings from './UserSettings';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import AddFlashcard from './CreateFlashcard/AddFlashcard';


class App extends Component {
  constructor(props) {
    super(props);

    console.log('firebase user', firebase.auth().currentUser)


    this.app = this.props.app;
    if (!firebase.apps.length) {
      this.app = firebase.initializeApp(DB_CONFIG);
    }

    // else {
    //   this.app = firebase.initializeApp({}); // if already initialized, use that one
    // }


    // this.app = firebase.initializeApp(DB_CONFIG);

    // this.app = this.props.app ;


    const databaseUrl = "https://optimal-iris-238613-default-rtdb.europe-west1.firebasedatabase.app/"

    this.databaseRef = this.app.database(databaseUrl).ref()

    this.database = this.app.database(databaseUrl).ref().child('cards')
    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [],
      user: null,
      currentCard: {}
    };
  }

  componentWillMount() {


    const currentCards = this.state.cards;
    this.database.on('child_added', snap => {
      currentCards.push({
        id: snap.val().id,
        eng: snap.val().eng,
        han: snap.val().han
      })
      this.setState({
        cards: currentCards,
        currentCard: this.getRandomCard(currentCards)
      })

    })

    var comp = this;
        firebase.auth().onAuthStateChanged(user => {
            if(user!== null) {
              console.log('on auth changed', user)
                comp.setState({user: {
                  "uid": user.uid,
                  "email": user.email,
                  "username": user.email.split('@')[0]
                }})
            }
            else {
                comp.setState({user: null})              
            }
        });


  }


  getRandomCard(currentCards) {
    var card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return (card);
  }

  updateCard() {
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }


  render() {
    console.log(this.state)
    return (
      // "backgroundImage": `url(${brain})`

      <div className="welcomer" style={{ "height": "150vh", "backgroundColor": "#D3F5F7", "objectFit": "cover" }}>

        <TopHeader user={this.state.user}/>

        <Switch>
          <Route exact path="/" render={() => (<HomePage user={this.state.user} app={this.props.app} />)} />

          <Route exact path="/Signup" render={() => (<Signup databaseRef={this.databaseRef} app={this.props.app} />)} />
          <Route exact path="/SignIn" render={() => (<SignIn databaseRef={this.databaseRef} app={this.props.app} />)} />
          <Route exact path="/settings" render={() => (<UserSettings app={this.props.app} user={this.state.user}/>)} />
          <Route exact path="/decks" render={() => (<CreateFlashcard databaseRef={this.databaseRef} app={this.props.app} user={this.state.user}/>)} />

          <Route exact path="/decks/:deckname" render={(props) => (<ShowFlashcard {...props} databaseRef={this.databaseRef} app={this.props.app} user={this.state.user}/>)} />
          <Route exact path="/decks/:deckname/add" render={(props) => (<AddFlashcard {...props} databaseRef={this.databaseRef} app={this.props.app} user={this.state.user}/>)} />
          <Route exact path="/decks/:deckname/manage" render={(props) => (<ManageFlashcard {...props} databaseRef={this.databaseRef} app={this.props.app} user={this.state.user}/>)} />
          {/* <Route exact path="/decks/java/add" render={(props) => (<div>add flashcard</div>)} /> */}
        </Switch>

      </div>
    );
  }
}

export default App;

