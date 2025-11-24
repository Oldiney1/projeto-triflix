"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import styles from "./page.module.css";

export default function Genres() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const res = await fetch("/api/movies");
      const data = await res.json();
      setMovies(data?.results ?? []);
    }
    loadMovies();
  }, []);

  const list1 = movies.slice(0, 5); 
  const list2 = movies.slice(5, 10);

  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.items}>
        <select className={styles.select}>
          <option hidden selected> Gêneros</option>
          <option>Ação</option>
          <option>Comédia</option>
          <option>Drama</option>
          <option>Terror</option>
        </select>
      </div>

      <div className={styles.movieContainer}>
        {list1.map(movie => (
          <div key={movie.id} className={styles.movieBox}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px"
              }}
            />
          </div>
        ))}
      </div>

      
      <div className={styles.movieContainer}>
        {list2.map(movie => (
          <div key={movie.id} className={styles.movieBox}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px"
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
