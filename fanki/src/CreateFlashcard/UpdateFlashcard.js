import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import delete1 from "./delete1.png";
import deck from "./deck.png";
import done from "./done1.png";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6

class UpdateFlashcard extends Component {
    constructor() {
        super();
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
        console.log('inside the flashcard to update')
    }

    componentDidMount() {
        this.setState({ text_front: this.props.selectedFlashcard.front })
        this.setState({ text_back: this.props.selectedFlashcard.back })
   
    }

    handleChangefront(value) {
        this.setState({ text_front: value })
    }
    handleChangeback(value) {
        this.setState({ text_back: value })
    }


    onCancel = () => {
        this.props.closeDialog()
    }

    modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            [{ 'list': 'bullet' }],
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

            <div style={{ "display": "flex", "flexDirection": "column" }}>


                <div style={{ "backgroundColor": "white", "padding": "10px" }}>

                    <form onSubmit={this.mySubmitHandler}>

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

                        {/* <div style={{ "display": "flex", "flexDirextion": "row", "alignSelf": "flex-end", "padding": "30px" }}>

                            <button className="btn" >  Save  </button>
                            <button className="btn " onClick={this.props.closeDialog}> Cancel  </button>

                        </div> */}

                    </form>

                </div>

            </div>
        );

    }
}


export default UpdateFlashcard;