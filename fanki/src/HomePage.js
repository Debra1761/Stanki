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




class HomePage extends Component {
  constructor(props) {
    super(props);


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

    this.database = this.app.database(databaseUrl).ref()
    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [],

      currentCard: {}
    };
  }

  componentWillMount() {
    const currentCards = this.state.cards;

    this.database.child('cards').on('child_added', snap => {

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

    return (


      <div className="welcomer" style={{ "height": "100vh", "background-color": "#D3F5F7", "object-fit": "cover" ,"paddingTop":"50px"}}>



        {/* <div>this is the user {this.state.user}</div> */}


        <CardStack />
        <span style={{"font-family": "Palatino", "marginLeft":"550px" }}>
                      click your brain to start learning today
        </span>
        
        <SearchPage database = {this.database}/>

        <div style={{ "display": "flex", "flexDirection": "row", "justifyContent": "center", "padding": "40px" }}>
          <button className="btn-custom">    <img style={{ "height": "30px" }} src={py} alt="python"></img> python  </button>
          <button className="btn-custom">    <img style={{ "height": "30px" }} src={mysql} alt="python"></img> mysql  </button>
          <button className="btn-custom">    <img style={{ "height": "30px" }} src={js} alt="python"></img> javascript  </button>
          <button className="btn-custom">    <img style={{ "height": "30px" }} src={java} alt="python"></img> java  </button>
          <button className="btn-custom">    <img style={{ "height": "30px" }} src={aws} alt="python"></img> aws  </button>


        </div>

{/* 
        <div>
          <div className="cardrow" style={{ "display": "flex", "flexDirection": "row", "justifyContent": "center", "marginTop": "20px" }}>
            <Card eng={this.state.currentCard.eng}
              han={this.state.currentCard.han}
            />
          </div>

        </div>

        <div className="next-button" style={{ "display": "flex", "flexDirection": "row", "justifyContent": "center" }}>
          <NextButton nextcard={this.updateCard} />
        </div> */}



      </div>
    );
  }
}

export default HomePage;


