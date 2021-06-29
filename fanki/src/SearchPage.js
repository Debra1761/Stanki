import React, { Component, useEffect, useState } from 'react';
import LoginPage from './LoginPage';
import search from './search.png'
import { Autocomplete, TextInput } from 'evergreen-ui'
import { Link, useHistory } from "react-router-dom";



const SearchPage = (props) => {
    const [names , setNames] = useState([])
    const history = useHistory();
    useEffect(() => {
        props.database.child('decks').on('value', snap => {
            console.log("in createflashcard decks: testing to see if this code worked", snap.val())

            var dictionary = snap.val() 

            var deckname = Object.keys(dictionary).map(function(key){
                return dictionary[key]["deck_name"];
            });

            setNames(deckname)

            console.log("deckname", deckname)
            
        // // console.log("url params:", props.match.params)

        // props.databaseRef.child("flashcards").child(props.match.params.deckname).on('value', snap => {
        //     console.log('this state', flashcards)
        //     setFlashcards(snap.val())
        //     console.log("in showflashcard", snap.val())




            // this.setState({
            // decks: deckname
            // })

        })

    }, [])


    const onEnterPress = (e, inputValue) => {
        if (e.key == "Enter") {
            history.push("/decks/"+inputValue) 
            console.log("enter pressed", inputValue)
        }
    }


    return (
        <Autocomplete
                    // title="Search your stack"
                    onChange={changedItem => console.log(changedItem)}
                    // items={['Apple', 'Apricot', 'Banana', 'Cherry', 'Cucumber']}
                    items={names}
                >
                    {props => {
                    const { getInputProps, getRef, inputValue } = props
                            return (
                    <div style={{"display":"flex","justifyContent":"center", "marginTop":"20px"}}> 
                            <TextInput
                                placeholder="Search your stack"
                                value={inputValue}
                                onKeyPress={(e) => {onEnterPress(e, inputValue)}}
                                ref={getRef}
                                {...getInputProps()}

                            />
                    </div> 
                                )
                    }}
      </Autocomplete>
    )
}


export default SearchPage;


