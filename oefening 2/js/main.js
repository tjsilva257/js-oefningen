const movies = [];

document.querySelector(".add-movie").addEventListener("click", function() {
   const movie = document.querySelector(".movie-input").value;

   if (movie) {
    movies.push(movie);
    const movieList = document.querySelector(".movie-list");
    movieList.innerHTML = "";
    movies.forEach((film) => {
        const li = document.createElement("li");
        li.textContent = film;
        movieList.appendChild(li);
    });
    document.querySelector(".movie-input").value = ""; //De .value eigenschap in JavaScript wordt gebruikt om de waarde van een invoerelement (zoals een tekstvak) te verkrijgen of in te stellen.
   } // Dus deze code zorgt ervoor dat het invoerveld met de klasse movie-input wordt geleegd
});