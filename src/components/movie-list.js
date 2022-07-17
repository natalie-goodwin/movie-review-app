/*This is the container component that opens the entire application */
import React from "react";
import Navbar from "./navbar";
import Movies from "./movie";

export default class MovieList extends React.Component {
    render() {
        let movies = [
            {
                title: "Double Indemnity"
                image: "./images/Double_Indemnity.jpg"
                plot: "Suspense, Crime, Noir"
                reviews: []
            },
            {
                title: "Singin' in the Rain"
                image: "./images/Singin'_in_the_Rain.jpg"
                plot: "Musical"
                reviews: []
            },
            {
                title: "Ninotchka"
                image:  "./images/Ninotchka.jpg"
                plot: "Romantic comedy"
                reviews: []
            },
            {
                title: "Sunrise"
                image: "./images/Sunrise.jpg"
                plot: "Silent film"
                reviews: []
            }
        ]
    } //closing render braces
} /*closing export bracket */


