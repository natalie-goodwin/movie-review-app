/*This is the container component that opens the entire application */
import React from "react";
import Navbar from "./navbar";
import Movie from "./movie";

export default class MovieList extends React.Component {
    render() {
        let movies = [ /*this is the array of movies and all film data; also includes empty arrays 
        for user reviews of each film. */
            {
                title: "Double Indemnity",
                image: "./images/Double_Indemnity.jpg",
                plot: "A housewife convinces an insurance salesman to help murder her husband in order to collect on a phony claim.  Directed by Billy Wilder and based on the novel 'Double Indemnity' by James M. Cain. 1944. Noir/Crime. Stars Barbara Stanwyck, Fred MacMurray, and Edward G. Robinson.",
                reviews: []
            }, 
            {
                title: "Ninotchka",
                image:  "./images/Ninotchka.jpg",
                plot: "When Soviet agent Ninotchka travels to France to sell the royal jewels of the former Grand Duchess, she encounters Count Leon d'Algout, whose mission is to thwart the sell of the jewels. Comedy and Romance ensue. Directed by Ernst Lubitsch. 1939. Romantic Comedy. Stars Greta Garbo, Melvyn Douglas, and Ina Claire.",            
                reviews: []
            },
            {
                title: "Sunrise",
                image: "./images/Sunrise.jpg",
                plot: "A man falls in love with a woman from the city and plots to murder his wife. Instead, he and his wife decide to travel to the city and eventually rekindle their marriage. Directed by F.W.Murnau. 1927. Silent film. Stars Janet Gaynor and George O'Brien",
                reviews: [] 
            }
        ]

        let arr;
        arr = movies.map( (movies, index ) => 
            <Movie title={movies.title} plot={movies.plot} reviews={movies.reviews} image={movies.image} key={index} />
        ) /*the array includes subarrays for each piece of the film data and the index; uses map
        method to populate the array*/

        return (
            
            <div className="container">
                <div>
                    <Navbar />
                </div> <br /><br />
                
                <div>
                    {arr}
                </div>  
            </div> /*returning the movies array*/
       )
    } 
}


