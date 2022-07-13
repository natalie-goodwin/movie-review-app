/*This NavBar component will be added to the Movie-List container; there will not be links
just the website title. */
import React from "react";

export default class NavBar extends React.Component {
    render() { 
        return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">    
           <a class="navbar-brand" href="index.html">Classic Film Reviews</a>           
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>                                    
        </nav>
        
        ); //closing return parentheses
    } // closing render braces
} // closing export braces

