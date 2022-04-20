console.log("connected to js")

// OUTER FUNCTION VARIABLES
const MOVIE_NAME_SELECT = document.querySelector('#movieList');
console.log(MOVIE_NAME_SELECT)
const BASE_URL = new URL("https://ghibliapi.herokuapp.com");

let movieTitle = document.querySelector('#movieTitle').value;
let releaseDate = document.querySelector('#releaseDate').value;
let movieBanner = document.querySelector('#movieBanner').value;
let description = document.querySelector('#description').value;


fetchMovie();

MOVIE_NAME_SELECT.addEventListener("change", fetchMovie);

function fetchMovie() {
    const url = new URL(`/films`, BASE_URL);

    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            Object.keys(data).forEach(movieObj => {
                // console.log(MOVIE, data[movieObj]);
                let option = document.createElement("option");
                option.value = data[movieObj].title;
                option.text = data[movieObj].title;
                MOVIE_NAME_SELECT.appendChild(option);
                // console.log("option is", option);
                // console.log("Movie select is", MOVIE_NAME_SELECT);
            })
        })
        .catch(err => console.error(err));
}

function fetchMovieInfo(){

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