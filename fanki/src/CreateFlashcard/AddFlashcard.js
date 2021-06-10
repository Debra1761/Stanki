import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import delete1 from "./delete1.png";
import deck from "./deck.png";
import done from "./done1.png";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6

class AddFlashcard extends Component {
    constructor() {
        super();
        this.Addnextcard = this.Addnextcard.bind(this);
        // You can also pass a Quill Delta here
        this.handleChangefront = this.handleChangefront.bind(this)
        this.handleChangeback = this.handleChangeback.bind(this)
        this.state = {
            back: '',
            fornt: '',
            text_front: '',
            text_back: '',
        };
    }


    componentWillMount() {
        console.log('inside add flashcard')
    }

    componentDidMount() {
    }

    handleChangefront(value) {
        this.setState({ text_front: value })
    }
    handleChangeback(value) {
        this.setState({ text_back: value })
    }

    Addnextcard() {
        this.props.Addnextcard();

    }

    modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          [ {'list': 'bullet'}],
          ['link', 'image'],
          ['clean'],
                ],
      }
     
      formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ]




    render() {
        return (

            <div style={{ "display":"flex","flexDirection":"column"}}>

                <div style={{"display":"flex","justifyContent":"center","marginRight":"500px"}}>

                <Link to={"/decks/" + this.props.match.params.deckname} ><img style={{ "height": "25px"}} src={done} alt="Create your own flashcards"></img> </Link>

                </div>

                

                <div className="flipdiv1"  style={{ "backgroundColor": "white", "padding": "10px" }}>

                    <form onSubmit={this.mySubmitHandler}>


                        <div style={{ "display": "inline-flex", "flexDirection": "row", "alignSelf": "center", "padding": "20px" }}>
                            <img style={{ "height": "40px", "width": "50px", "alignSelf": "center", "marginRight": "10px" }} src={deck} alt="Create your own flashcards"></img>
                            <h1> {this.props.match.params.deckname} </h1>

                        </div>
                        <p>Front card:</p>

                        <ReactQuill value={this.state.text_front}
                            name='front'
                            modules={this.modules}
                            formats={this.formats}
                            onChange={this.handleChangefront} />


                        <p>Back card:</p>
                        <ReactQuill value={this.state.text_back}
                            name='back'
                            modules={this.modules}
                            formats={this.formats}
                            onChange={this.handleChangeback} />
                        <br />
                        <br />
                        <button className="btn" onClick={this.Addnextcard}>  Add  </button>
                    </form>

                </div>






            </div>
        );

    }
}

export default AddFlashcard;



// l=[]
// l.map((x)=> console.log(x))