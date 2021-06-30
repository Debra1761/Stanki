import React, {Component, useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import done from "./done1.png";
import del from "./del.png";
import edit from './edit.png'
import file from './file.png'
import { Table } from 'evergreen-ui'
import { Pane, Dialog, Button } from 'evergreen-ui'
import UpdateFlashcard from './UpdateFlashcard'
import { RemoveIcon, EditIcon } from 'evergreen-ui'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageFlashcard = (props) => {

    const [flashcards, setFlashcards] = useState([]);
    const [counter, setCounter] = useState(0);
    const [isShown, setIsShown] = useState(false)
    const [selectedFlashcard, setSelectedFlashcard] = useState({});

    const [text_front, setTextFront] = useState("")
    const [text_back, setTextBack] = useState("")

    const [raw_text_front, setRawTextFront] = useState("")
    const [raw_text_back, setRawTextBack] = useState("")

    const frontRef = useRef();
    const backRef = useRef();

    const [ID, setID] = useState("")

    const onNextClick = () => {
        if (counter == flashcards.length - 1) {
            setCounter(0)
        }
        else {
            setCounter(counter + 1)
        }
    }
 


    useEffect(() => {
        console.log('use effect is loaded')
        console.log("url params:", props.match.params)

        props.databaseRef.child("flashcards").child(props.match.params.deckname).on('value', snap => {
            console.log('this state', flashcards)


            var flashcardSnap = snap.val() 

            if (flashcardSnap !== null) {
            var flashcards = Object.keys(flashcardSnap).map(function(key){
                return flashcardSnap[key];
            });



            setFlashcards(flashcards)

            console.log("in manage flashcards", flashcards)
        }


        })

    }, [])


    const onDeleteFlashcard = (flashcard) => {
        console.log("on delete click", flashcard.id)
        props.databaseRef.child("flashcards").child(props.match.params.deckname).child(flashcard.id).remove();
        console.log('successfully removed!')
        notification()
    }

    const notify = () => {
        toast.success("Fashcard updated succesfully!")}
        ;

    const notification = () => {
        toast.error("Fashcard deleted succesfully!")}
        ;

    const onFlashcardRowClick = (flashcard) => {
        console.log("selected flashcard", flashcard)
        setSelectedFlashcard(flashcard)

        setTextFront(flashcard.front)
        setTextBack(flashcard.back)

        setRawTextFront(flashcard.frontText)
        setRawTextBack(flashcard.backText)

        setID(flashcard.id)

        setIsShown(true)
    }

    const closeDialog = () => {
        console.log("closedialog")
        setIsShown(false)
    }

    function extractContent(html) {

        return new DOMParser().parseFromString(html, "text/html") . 
            documentElement . textContent;
    
    }

    const handleChangefront = (value) => {
        setTextFront(value)
        const rawText = extractContent(value)
        setRawTextFront(rawText)
    }

    const handleChangeback = (value) => {
        setTextBack(value)
        const rawText = extractContent(value)
        setRawTextBack(rawText)
    }

    const onUpdate = (close) => {
        console.log("updation is happening here" , ID , text_front, text_back)
        setIsShown(false)

        var store = props.databaseRef.child("flashcards").child(props.match.params.deckname).child(ID);       
        var updatedCard ={
            "id": ID,
            "front": text_front,
            "back": text_back,
            "frontText": raw_text_front,
            "backText": raw_text_back
        }
        store.update(updatedCard);
        notify()
        console.log(updatedCard)


        // close()
        // console.log("updation is happening here" , text_front, text_back)
        

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
        <Dialog
        isShown={isShown}
        onCancel={closeDialog}
        title="Update flashcard"
        confirmLabel="Save"
        hasFooter= {true}
        onConfirm={(close)=> onUpdate(close)}
        >
        {/* <UpdateFlashcard selectedFlashcard={selectedFlashcard} closeDialog={closeDialog}/> */}

        <div style={{ "display": "flex", "flexDirection": "column" }}>


                <div style={{ "backgroundColor": "white", "padding": "10px" }}>

                    <form>

                        <p>Front card:</p>

                        <ReactQuill value={text_front}
                            name='front'
                            ref={frontRef}
                            modules={modules}
                            formats={formats}
                            onChange={handleChangefront} />


                        <p>Back card:</p>
                        <ReactQuill value={text_back}
                            name='back'
                            ref={backRef}
                            modules={modules}
                            formats={formats}
                            onChange={handleChangeback} />

                    </form>

                </div>

                </div>

      </Dialog>



                <div style={{"display":"flex","justifyContent":"flex-start", "marginLeft":"100px", "paddingTop":"20px"}}>

                     <Link to={"/decks/"+props.match.params.deckname }  ><img style={{ "height": "25px"}} src={done} alt="Create your own flashcards"></img> </Link>

                </div>


                <div style={{"display":"flex","justifyContent":"center", "padding":"20px","fontFamily":"Palatino"}}>
                <span> <img style={{ "height": "20px", "width": "20px"}} src={file}  alt="edit"></img>  {props.match.params.deckname} flashcards </span>
                </div>

                <div>
                

                <Table>
                    <Table.Head>
                        {/* <Table.SearchHeaderCell /> */}
                       
                        <Table.TextHeaderCell flexBasis={100} flexShrink={0} flexGrow={0}>  </Table.TextHeaderCell>
                        <Table.TextHeaderCell flexBasis={400} >Front face</Table.TextHeaderCell>
                        <Table.TextHeaderCell flexBasis={200} >Back face</Table.TextHeaderCell>
                        <Table.TextHeaderCell></Table.TextHeaderCell>
                        
                    </Table.Head>
                    <Table.Body >
                            {flashcards.map((flashcard) => (
                            <Table.Row key={flashcard.id} isSelectable>
                        
                                <Table.TextCell flexBasis={100} flexShrink={0} flexGrow={0}></Table.TextCell>
                                
                                <Table.TextCell flexBasis={400} > 
                                    {flashcard.frontText}                                                
                                </Table.TextCell>

                                <Table.TextCell flexBasis={200} >
                                    {flashcard.backText}                                                
                                </Table.TextCell>
                                
                                <Table.TextCell>
                                    
                                        <img onClick={() => onFlashcardRowClick(flashcard)} style={{ "height": "20px", "width": "20px","padding":"15px"}} src={edit}  alt="edit"></img>
                                    
                                    <img onClick={ () => onDeleteFlashcard(flashcard)} style={{ "height": "20px", "width": "20px","padding":"15px"}} src={del}  alt="delete"></img>
                                </Table.TextCell>
                            </Table.Row>
                            ))}
                    </Table.Body>
                    </Table>

                    <ToastContainer />
            
                </div>
               
      </div>
    );
  
   }
  
  
export default ManageFlashcard;



// l=[]
// l.map((x)=> console.log(x))