console.log("connected to js")

document.querySelector('button').addEventListener('click',getFetch)



function getFetch() {
    let userInput = document.querySelector('input').value;

    let movieID = "";
    
    const url = `https://ghibliapi.herokuapp.com/films/`;

    // 2baf70d1-42bb-4437-b551-e5fed5a87abe

    console.log(url);


    fetch(url)
        .then(res => res.json())
        .then(data => {


            let movieObj = data;

            console.log(movieObj);

            // hasOwnProperty('propertyName') find object in array



            // if (movieObj.includes() === userInput.value) {
            //     console.log("Title is found");
            // }

            document.querySelector('#movieTitle').innerText = movieObj.title;
            document.querySelector('#releaseDate').innerText = movieObj.release_date;
            document.querySelector('#directorTitle').innerText = movieObj.director;
            document.querySelector('img').src = movieObj.movie_banner;
            document.querySelector('#description').innerText = movieObj.description;
        })
        .catch(err => {
            console.log(`error ${err}`);
        });
    
}