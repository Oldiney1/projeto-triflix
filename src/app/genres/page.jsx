import Navbar from "@/components/navbar";
import styles from "./page.module.css"

export default function Genres(){
    return(
        <div className={styles.container}>
            <Navbar></Navbar>

            <div className={styles.items}>
                <select className={styles.select}>
                    <option hidden selected> Gêneros</option>
                    <option value="">Ação</option>
                    <option value="">Comédia</option>
                    <option value="">Drama</option>
                    <option value="">Terror</option>
                </select>
            </div>

            <div className={styles.movieContainer}>
                <div className={styles.movieBox}></div>
                <div className={styles.movieBox}></div>
                <div className={styles.movieBox}></div>
                <div className={styles.movieBox}></div>
                <div className={styles.movieBox}></div>
            </div>

            <div className={styles.movieContainer}>
                <div className={styles.movieBox}></div>
                <div className={styles.movieBox}></div>
                <div className={styles.movieBox}></div>
                <div className={styles.movieBox}></div>
                <div className={styles.movieBox}></div>
            </div>

            
        </div>
    );
}