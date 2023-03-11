import React, { useEffect, useState } from "react";
import instance from "../instance";
import './Row.css'

function Row({ isPoster,title, fetchUrl }) {
  const base_url = "https://image.tmdb.org/t/p/original/";

  const [movies, SetMovies] = useState([]);
  //api call

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    const response = await instance.get(fetchUrl);
    // console.log(response.data.results);
    SetMovies(response.data.results);
  };

//   console.log(movies);

  return (
    <div className="Row">
      <h2> {title}</h2>

      <div className="Movies-Row">
        {
        movies.map((movie) => (
          <img className={`movie-img ${isPoster && 'movie_poster'}`} 
          src={`${base_url}${isPoster?movie.poster_path: movie.backdrop_path}`} />
        ))
        }
      </div>
    </div>
  );
}

export default Row;
