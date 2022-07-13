/*container component that opens entire application */
import React from "react";
import NavBar from "./navbar";

export default class MovieList extends React.Component {
    render() {
        return (              
        <div className="container-fluid">        
            <div>
                <NavBar /> 
            </div> 
            <div>
                
            </div>              
        </div> //closing div          
        );
    } //closing render braces
}