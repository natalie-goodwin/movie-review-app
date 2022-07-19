/*This SubmitButton component will be added to the ReviewForm component */
import React from "react";


export default class ReviewButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.name,
            id: props.id
        }
        this.handleClick = this.handleClick.bind(this) /*bind this to the handleClick method */
    }

    handleClick(e) {
        this.props.onClick(e)
        console.log(e); 
    } /*makes the review button clickable and links a specific button to a specific film title; handleClick will call for onClick */
    render() {
        return( /*this is the code that creates the review button and review form */
            <div className="text-black bg-light card-footer col-sm-12">
                <p>What you think of the film?</p>                            
                <input type="text" id="newReview" placeholder="Enter review"/><br /><br />
                <button className="btn btn-info" onClick={this.handleClick} name={this.state.title} id={this.state.id}>Submit review</button>
            </div>
        ) 
    }
}