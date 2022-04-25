console.log("connected to js")

// OUTER FUNCTION VARIABLES
const MOVIE_NAME_SELECT = document.querySelector('#movieList');
const MOVIE_INFO = document.querySelector('#movieInfo')
const CHARACTER_INFO = document.querySelector('#characterSection')



// console.log(MOVIE_NAME_SELECT)
const BASE_URL = new URL("https://ghibliapi.herokuapp.com");
let url = new URL(`/films`, BASE_URL);

fetchMovies();

MOVIE_NAME_SELECT.addEventListener("change", fetchMovieInfo);
MOVIE_NAME_SELECT.addEventListener("change", fetchCharactersInfo);

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
    // not sure how it's only pulling the title...
    const movie = e.target.value;
    console.log(`e is`, e);
    
    // const url = new URL(`${}`)
    console.log(movie);

    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            MOVIE_INFO.removeAttribute("hidden");
            document.querySelector('#movieTitle').innerText = data[movie].title;
            document.querySelector('#releaseDate').innerText = data[movie].release_date;
            document.querySelector('#directorTitle').innerText = data[movie].director;
            document.querySelector('#movieBanner').src = data[movie].movie_banner;
            document.querySelector('#description').innerText = data[movie].description;
        })
    
    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            CHARACTER_INFO.removeAttribute("hidden");
            //  Object.keys(data).forEach(movieObj => {
            //     // console.log(MOVIE, data[movieObj]);
            //     let option = document.createElement("option");
            //     // option will retain the movie ID value
            //     // as well as the text inside
            //     option.value = movieObj;
            //     // this will directly add text to the list as it builds
            //     option.text = data[movieObj].title;
            //     MOVIE_NAME_SELECT.appendChild(option);
            // })

            Object.keys(data).forEach(movieObj => {
                let item = document.createElement("li");
                item.value = movieObj;
                item.text = data[movieObj].people
            })
        })
}