import styles from "./component.module.css"


export default function Slider(){
    return(
        <div className={styles.container}>
            
            <h1>Lançamentos</h1>
            <br />

            <div className={styles.movieContainer}>
                <div className={styles.movieBox}></div>
                <div className={styles.movieBox}></div>
                <div className={styles.movieBox}></div>
                <div className={styles.movieBox}></div>
                <div className={styles.movieBox}></div>
                <div className={styles.movieBox}></div>
                <div className={styles.movieBox}></div>
                <div className={styles.movieBox}></div>
                <div className={styles.movieBox}></div>
                <div className={styles.movieBox}></div>

                
            </div>

        </div>
    );
}