import React, {Component, useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import delete1 from "./delete1.png";
import deck from "./deck.png";
import done from "./done1.png";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddFlashcard = (props) => {

    const [flashcards, setFlashcards] = useState([]);

    const [text_front, setTextFront] = useState("")
    const [text_back, setTextBack] = useState("")

    const [raw_text_front, setRawTextFront] = useState("")
    const [raw_text_back, setRawTextBack] = useState("")

    const frontRef = useRef();
    const backRef = useRef();

    const notify = () => {
        toast.success("Flashcard added succesfully!")}
        ;
 
    useEffect(() => {
        console.log('use effect is loaded')
        console.log("url params:", props.match.params)

        props.databaseRef.child("flashcards").child(props.match.params.deckname).on('value', snap => {

            var flashcardSnap = snap.val() 
            var flashcards = Object.keys(flashcardSnap).map(function(key){
                return flashcardSnap[key];
            });



            setFlashcards(flashcards)
            console.log("in add flashcards", flashcards)
            
        })

    }, [])

    const handleChangefront = (value) => {
        setTextFront(value)
        setRawTextFront(frontRef.current.editor.getText())
    }

    const handleChangeback = (value) => {
        setTextBack(value)
        setRawTextBack(backRef.current.editor.getText())

    }



    const Addnextcard = () => {


        console.log("something is happening !")
        var store = props.databaseRef.child("flashcards").child(props.match.params.deckname); 
        var tempRef = store.push();
        var key = tempRef.key      
        var updatedCard = {
            "id": key,
            "front": text_front,
            "back": text_back,
            "frontText": raw_text_front,
            "backText": raw_text_back
        }
        tempRef.set(updatedCard, (error) => {
            if (error) {
                console.log(error)
            }
            else {
                console.log("Added succesfully!", updatedCard)
                notify()
                setTextFront(null)
                setTextBack(null)
                
            }
        });
        
    }



    
    const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          [ {'list': 'bullet'}],
          ['link', 'image'],
          ['clean'],
                ],
      }

     
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ]
    

        return (

        <div style={{ "display":"flex","flexDirection":"column"}}>

                <div style={{"display":"flex","justifyContent":"center","marginRight":"500px"}}>

                     <Link to={"/decks/" + props.match.params.deckname}  ><img style={{ "height": "25px"}} src={done} alt="Create your own flashcards"></img> </Link>

                </div>

            

            <div className="flipdiv1"  style={{ "backgroundColor": "white", "padding": "10px" }}>



                    <div style={{ "display": "inline-flex", "flexDirection": "row", "alignSelf": "center", "padding": "20px" }}>
                        <img style={{ "height": "50px", "width": "50px", "alignSelf": "center", "marginRight": "10px" }} src={deck} alt="Create your own flashcards"></img>
                        <h1 > {props.match.params.deckname} </h1>

                    </div>
                    <p>Front card:</p>

                    <ReactQuill value={text_front}
                        ref={frontRef}
                        name='front'
                        modules={modules}
                        formats={formats}
                        onChange={handleChangefront} />



                    <p>Back card:</p>
                    <ReactQuill value={text_back}
                        ref={backRef}
                        name='back'
                        modules={modules}
                        formats={formats}
                        onChange={handleChangeback} />
                                    <br />
                                    <br />
                    <button className="btn" onClick={Addnextcard}>  Add  </button>
                    
                    
            </div>
            <ToastContainer />
       </div>
        );

    }


export default AddFlashcard;



// l=[]
// l.map((x)=> console.log(x))