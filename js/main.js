console.log("connected to js")

// OUTER FUNCTION VARIABLES
const MOVIE_NAME_SELECT = document.querySelector('#movieList');
const MOVIE_INFO = document.querySelector('#movieInfo')
// console.log(MOVIE_NAME_SELECT)
const BASE_URL = new URL("https://ghibliapi.herokuapp.com");
let url = new URL(`/films`, BASE_URL);

fetchMovies();

MOVIE_NAME_SELECT.addEventListener("change", fetchMovieInfo);

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
                option.value = data[movieObj].title;
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
    
    const movie = e.target.value;
    console.log(e.target);
    
    // const url = new URL(`${}`)
    console.log(movie);

    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            MOVIE_INFO.removeAttribute("hidden");
            console.log(MOVIE_INFO);
        })
    
    document.querySelector('#movieTitle').innerText = movie;

}


// document.querySelector('button').addEventListener('click', getFetch);


// function getFetch() {
//     let userInput = document.querySelector('input').value;


//     const url = new URL("/films","https://ghibliapi.herokuapp.com");

//     // 2baf70d1-42bb-4437-b551-e5fed5a87abe
//     url.searchParams.set("title", userInput);

//     console.log(url.toString());


//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             console.log("DATA is: ", data);

//             // Dropdown menu of all the valid movie titles, to pull up their information
//             // go to SudoMateo's 100devs-main, class26, homework, hashicorp-releases
//             // read the js to see the various fetch functions
//             // while loop in fetchVersions deletes the appended childs to refresh the dropdown menus after each new selections
//             // use a forEach to us include and find
//             // fuzzy search, not case sensitive


//             // curl -X GET -H "Content-Type: application/json" https://ghibliapi.herokuapp.com/films


//             document.querySelector('#movieTitle').innerText = data[0].title;
//             document.querySelector('#releaseDate').innerText = data[0].release_date;
//             document.querySelector('#directorTitle').innerText = data[0].director;
//             document.querySelector('img').src = data[0].movie_banner;
//             document.querySelector('#description').innerText = data[0].description;
//         })
//         .catch(err => {
//             console.log(`error ${err}`);
//         });
    
// }