function getMovies() {
  fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
    // fetch("https://yts.mx/api/v2/list_movies.json")
    .then((res) => res.json())
    .then((json) => {
      const movies = json.data.movies;
      console.log("movies: ", movies);
      addItem(movies);
    });
}

function addItem(movies) {
  for (let i = 0; i < movies.length; i++) {
    const app = document.getElementById("movies");

    // Add Title
    const addTitle = document.createElement("a");
    addTitle.innerHTML = `${movies[i].title} (${movies[i].year})`;
    addTitle.href = movies[i].url;
    addTitle.setAttribute("class", "movieTitle");
    app.appendChild(addTitle);

    // Add Ratings
    const addRatings = document.createElement("div");
    addRatings.innerHTML = `Ratings: ${movies[i].rating} / 10`;
    if (movies[i].rating >= 9) {
      addRatings.setAttribute("class", "movieRatingsGood");
    } else if (movies[i].rating >= 7) {
      addRatings.setAttribute("class", "movieRatingsSoso");
    } else {
      addRatings.setAttribute("class", "movieRatingsBad");
    }
    app.appendChild(addRatings);

    // Add Genres
    const addGenres = document.createElement("div");
    addGenres.innerHTML = `Genres: ${movies[i].genres.join(", ")}`; // delimiter
    app.appendChild(addGenres);

    // Add Runtime
    const addRuntime = document.createElement("div");
    addRuntime.innerHTML = `Runtime: ${movies[i].runtime} min`;
    app.appendChild(addRuntime);

    // Add Synopsis
    const addSynopsis = document.createElement("div");
    let synopsis = "";
    if (movies[i].synopsis === "") {
      synopsis = "情報がありません。";
    } else {
      synopsis = movies[i].synopsis;
    }
    const synopsisLength = synopsis.split("").length;
    if (synopsisLength > 1600) {
      synopsis = synopsis.slice(0, 1600) + "...";
    }
    addSynopsis.innerHTML = `Synopsis: ${synopsis}`;
    app.appendChild(addSynopsis);

    // Add Download Link
    for (let j = 0; j < movies[i].torrents.length; j++) {
      const addDownload = document.createElement("a");
      addDownload.innerHTML = `Link #${j + 1}`;
      if (movies[i].torrents[j].url) {
        addDownload.href = movies[i].torrents[j].url;
      }
      app.appendChild(addDownload);
    }

    // Add Image
    const addImage = document.createElement("img");
    addImage.src = movies[i].large_cover_image;
    app.appendChild(addImage);
  }
}

getMovies()
