"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import styles from "./page.module.css";
import Slider from "@/components/slider";

export default function Suggestions() {
  const [filme, setFilme] = useState(null);

  useEffect(() => {
    async function loadMovie() {
      const res = await fetch("/api/movies");
      const data = await res.json();

      setFilme(data.results?.[0] || null);
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
              src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
              alt={filme.title}
              className={styles.banner}
            />
          )}
        </div>

        {filme && (
          <div className={styles.containerTexto}>
            <div className={styles.conteudo}>
              <h1>{filme.title}</h1>
              <br /><br />
              <p>{filme.overview}</p>
            </div>
          </div>
        )}

      </div>

      <Slider />
    </div>
  );
}

