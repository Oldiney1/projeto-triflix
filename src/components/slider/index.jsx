"use client";

import { useEffect, useState } from "react";
import styles from "./component.module.css";

export default function Slider() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const res = await fetch("/api/movies");
      const data = await res.json();
      setMovies(data.results || []); 
    }
    loadMovies();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Lançamentos</h1>

      <div className={styles.movieContainer}>
  {movies.slice(0, 10).map((movie) => (
    <div key={movie.id} className={styles.movieBox}>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  ))}
</div>
    </div>
  );
}
