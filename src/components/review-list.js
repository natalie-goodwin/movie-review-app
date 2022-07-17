import React from "react";
import Review from "./review";
import ReviewForm from "./review-form";

export default class ReviewList extends React.Component {
    render() {
        return (
            <div className="container">
                <div>
                    <Review />    
                </div>   <br />              
                <div>
                    <ReviewForm />
                </div>                
            </div>
        );
    }
}

/*This review list includes the Review and ReviewForm components */