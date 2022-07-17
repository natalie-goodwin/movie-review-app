/*This component will be added to ReviewList component */
import React from "react";
import SubmitButton from "./submit-button";
import Stars from "./stars"

export default class ReviewForm extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
            
            <form className="row g-3 form-center">
                
                <div className="col-sm-12" >
                    <label form="userReview" className="form-label">How many stars do you give this film?</label>
                    <div>
                        <Stars />
                    </div>
                    <input type="userReview" className="form-control" id="userReview" aria-describedby="reviewHelp" placeholder="Type review here" />            
                </div>      
                <div>
                <SubmitButton /> 
                </div>                    
            </form>
                </div> 
            </div> /*closing card div */
        ) /*closing return parentheses */
    } /*closing render bracket */ 
} /*closing export bracket */

/*This component is added to the ReviewList component. Included is the code for a form the user can fill out. It also includes the
Star component and the Submit Button component*/