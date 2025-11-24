"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Slider from "@/components/slider";
import styles from "./page.module.css";

export default function Suggestions() {
  const [filme, setFilme] = useState(null);

  useEffect(() => {
    async function loadMovie() {
      const res = await fetch("/api/movies");
      const data = await res.json();

      const movies = data?.results ?? [];

      if (movies.length > 0) {
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        setFilme(randomMovie);
      }
    }

    loadMovie();
  }, []);

  return (
    <div>
      <Navbar />

      <div className={styles.telaInicial}>
        <div className={styles.containerLogo}>
          {filme && (
            <img
              src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`}
              alt={filme.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
          )}
        </div>

        <div className={styles.containerTexto}>
          <div className={styles.conteudo}>
            {filme ? (
              <>
                <h1>{filme.title}</h1>
                <br />
                <p>{filme.overview}</p>
              </>
            ) : (
              <p>Carregando sugestão...</p>
            )}
          </div>
        </div>
      </div>

      <Slider></Slider>
    </div>
  );
}
