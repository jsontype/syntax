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
  movies.forEach((movie) => {
    const app = document.getElementById("movies");

    // Add Title
    const addTitle = document.createElement("a");
    addTitle.innerHTML = `${movie.title} (${movie.year})`;
    addTitle.href = movie.url;
    addTitle.setAttribute("class", "movieTitle");
    app.appendChild(addTitle);

    // Add Ratings
    const addRatings = document.createElement("div");
    addRatings.innerHTML = `Ratings: ${movie.rating} / 10`;
    movie.rating >= 9
      ? addRatings.setAttribute("class", "movieRatingsGood")
      : movie.rating >= 7
      ? addRatings.setAttribute("class", "movieRatingsSoso")
      : addRatings.setAttribute("class", "movieRatingsBad");
    app.appendChild(addRatings);

    // Add Genres
    const addGenres = document.createElement("div");
    addGenres.innerHTML = `Genres: ${movie.genres.join(", ")}`; // delimiter
    app.appendChild(addGenres);

    // Add Runtime
    const addRuntime = document.createElement("div");
    addRuntime.innerHTML = `Runtime: ${movie.runtime} min`;
    app.appendChild(addRuntime);

    // Add Synopsis
    const addSynopsis = document.createElement("div");
    let synopsis = "";
    movie.synopsis === ""
      ? (synopsis = "情報がありません。")
      : (synopsis = movie.synopsis);
    const synopsisLength = synopsis.split("").length;
    synopsis = synopsisLength > 1600 && synopsis.slice(0, 1600) + "...";
    addSynopsis.innerHTML = `Synopsis: ${synopsis}`;
    app.appendChild(addSynopsis);

    // Add Download Link
    movie.torrents.forEach((torrent) => {
      const addDownload = document.createElement("a");
      addDownload.innerHTML = `Link #${i + 1}`;
      addDownload.href = torrent.url || "#";
      app.appendChild(addDownload);
    });

    // Add Image
    const addImage = document.createElement("img");
    addImage.src = movie.large_cover_image;
    app.appendChild(addImage);
  });
}

getMovies();
