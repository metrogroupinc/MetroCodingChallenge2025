/* Project: Movie Search App
   Author: [Candidate Name]
   Description: A simple web app that fetches movie data from the OMDb API.
*/

// TODO: Replace this with your own API key from https://www.omdbapi.com/
const API_KEY = 'YOUR_API_KEY';

// TODO: These are the main DOM elements we'll be working with
const moviesDiv = document.getElementById('movies');
const detailsDiv = document.getElementById('movie-details');
const favoritesDiv = document.getElementById('favorites');
let currentMovie = null;

function searchMovies() {
    //Get the search query from the input field
    const query = document.getElementById('search').value;
    // TODO: Add correctly formated API Request URL to Fetch method 
    fetch(/*API Request URL*/)
        //TODO: Format fetch response Promise as JSON
        //TODO: Handle JSON format Promise
                // TODO: Clear the current movies display (moviesDiv)
    
                // TODO: If search results exist, loop through them and:
                //       1. Create a movie element for each result
                //       2. Add the movie poster (if poster available), title, and year
                //       3. Add a details button that calls getMovieDetails() with the movie imdbID
                //       4. Append each movie element to the moviesDiv       
}

function getMovieDetails(imdbID) {
     // TODO: Add correctly formated API Request URL to Fetch method 
     fetch(/*API Request URL*/)
        //TODO: Format fetch response Promise as JSON
        //TODO: Handle JSON format Promise
            // TODO: When the data returns:
            //       1. Store the movie data in the currentMovie variable
            //       2. Update the movie details section with the title, poster, and info
            //       3. Call updateFavoriteButtonText() to set the correct button text
            //       4. Hide the movies list and show the details view
}

function goBack() {
    // TODO: Hide the details view and show the movies list again
}

/* Extra Challenge if time allows add "Favorites" feature*/

function toggleFavorite() {
    // TODO: Get the current favorites from localStorage
    
    // TODO: Check if the current movie is already in favorites (use imdbID as unique identifier)
    
    // TODO: If it exists, remove it from favorites
    //       If it doesn't exist, add it to favorites
    
    // TODO: Save the updated favorites back to localStorage
    
    // TODO: Update the favorite button text and re-render the favorites list
}

function updateFavoriteButtonText() {
    // TODO: Get the current favorites from localStorage
    
    // TODO: Check if the current movie is in favorites
    
    // TODO: Update the favorite button text based on whether the movie is in favorites
}

function renderFavorites() {
    // TODO: Clear the current favorites display
    
    // TODO: Get all favorites from localStorage
    
    // TODO: For each favorite movie:
    //       1. Create a movie element
    //       2. Add the movie poster, title, and year
    //       3. Add a details button that calls getMovieDetails() with the movie ID
    //       4. Append each movie element to the favoritesDiv
}

// TODO: Call renderFavorites when the page loads to display any saved favorites
document.addEventListener('DOMContentLoaded', renderFavorites);