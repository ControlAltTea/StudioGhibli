console.log("connected to js")

// OUTER FUNCTION VARIABLES
const MOVIE_NAME_SELECT = document.querySelector('#movieList');
const MOVIE_INFO = document.querySelector('#movieInfo')


// const CHARACTER_INFO = document.querySelector('#characterSection')



// console.log(MOVIE_NAME_SELECT)
const BASE_URL = new URL("https://ghibliapi.herokuapp.com");
let url = new URL(`/films`, BASE_URL);

fetchMovies();

MOVIE_NAME_SELECT.addEventListener("change", fetchMovieInfo);
// MOVIE_NAME_SELECT.addEventListener("change", fetchCharactersInfo);

// Creates a dropdown menu of listed movies in the Studio Ghibli API
function fetchMovies() {
    // using the url from above,
    fetch(url)
        .then(resp => resp.json())
        // data will loop through each movie title as store it to an "option element"
        .then(data => {
            Object.keys(data).forEach(movieObj => {
                // console.log(MOVIE, data[movieObj]);
                let option = document.createElement("option");
                // option will retain the movie ID value
                // as well as the text inside
                option.value = movieObj;
                // this will directly add text to the list as it builds
                option.text = data[movieObj].title;
                MOVIE_NAME_SELECT.appendChild(option);
            })
        })
        // .catch(err => console.error(err));
}

// each time a new option from the select menu is chosen, a "change"
// will be registered and the fetchMovieInfo will run
function fetchMovieInfo(e){
    // return's the target's value
    // in the fetchMovies() fetch request, we are setting the "e" to the same information as the option that is selected
    // if logged to the console, e will return as the "movieList", which is our target each time
    // we set movie to be the /value/ of the option we are currently changing to
    const movie = e.target.value;
    console.log(`e is`, e);
    
    // when logged to the console, movie returns an index
    // this index is the where the currently movie selected is located in the array of movies
    console.log(movie);

    // based on the url currently being set to "/films", we are able to cycle through each object at that location
    //  the object then delivers its properties below
    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            MOVIE_INFO.removeAttribute("hidden");
            document.querySelector('#movieTitle').innerText = data[movie].title;
            document.querySelector('#releaseDate').innerText = data[movie].release_date;
            document.querySelector('#directorTitle').innerText = data[movie].director;
            document.querySelector('#OGTitle').innerText = data[movie].original_title;
            document.querySelector('#titleRomanised').innerText = data[movie].original_title_romanised;
            document.querySelector('#movieBanner').src = data[movie].movie_banner;
            document.querySelector('#description').innerText = data[movie].description;
        })
    
    // fetch(url)
    //     .then(resp => resp.json())
    //     .then(data => {
    //         CHARACTER_INFO.removeAttribute("hidden");
    //         //  Object.keys(data).forEach(movieObj => {
    //         //     // console.log(MOVIE, data[movieObj]);
    //         //     let option = document.createElement("option");
    //         //     // option will retain the movie ID value
    //         //     // as well as the text inside
    //         //     option.value = movieObj;
    //         //     // this will directly add text to the list as it builds
    //         //     option.text = data[movieObj].title;
    //         //     MOVIE_NAME_SELECT.appendChild(option);
    //         // })

    //         Object.keys(data).forEach(movieObj => {
    //             let item = document.createElement("li");
    //             item.value = movieObj;
    //             item.text = data[movieObj].people
    //         })
    //     })
}