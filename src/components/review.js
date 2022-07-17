import React from "react";
import ReviewForm from "./review-form";

export default class Review extends React.Component {
    render() {
        return (
            <div class="card">
                <div class="card-header">
                   <h5> Reviews</h5>
                </div>
                
                <div class="card-body">                    
                    <p class="card-text"></p>                     
                </div> 
            </div> //closing card div
        ) //closing return parentheses
    } //closing render brackets
} //closing export bracket

/*This Review component is where the review and reviewer stars will be appear after users submit their reviews. Everything 
will appear inside the card-body div.*/