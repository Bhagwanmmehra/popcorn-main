import styles from "../styles/Movie.module.css";

function Movie({ imdbID, image, name, year, handleMovieCardClick, active }) {
    return (
        <div
            // here arrow function is used to define the onclick function not calling it
            onClick={() => handleMovieCardClick(imdbID)}
            className={`${styles.movie} ${active ? styles.activeMovie : ""}`}
        >
            <div className={styles.imageBox}>
                <img src={image} alt={name} />
            </div>
            <div className={styles.detailsBox}>
                <h3>{name}</h3>
                <p>{year}</p>
            </div>
        </div>
    );
}

export default Movie;
