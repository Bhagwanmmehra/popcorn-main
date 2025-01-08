import styles from "../styles/WatchedMovie.module.css";
import Emoji from "./Emoji";

function formatMovieLength(length) {
    const min = Number(length.split(" ").at(0));
    const hh = Math.round(min / 60);
    const mm = min % 6;
    return `${hh}h ${mm}m`;
}

function WatchedMovie({
    imdbID,
    image,
    name,
    imdbRating,
    userRating,
    runtime,
    handleRemoveMovieList,
}) {
    return (
        <div className={styles.movie}>
            <div className={styles.imageBox}>
                <img src={image} alt={name} />
            </div>
            <div className={styles.detailsBox}>
                <h4>{name}</h4>
                <div>
                    <span>
                        <Emoji txt="🍅" />
                        <p>{imdbRating}</p>
                    </span>
                    <span>
                        <Emoji txt="⭐️" />
                        <p>{userRating}</p>
                    </span>
                    <span>
                        <Emoji txt="🕗" />
                        <p>{formatMovieLength(runtime)}</p>
                        {/* <p>{runtime}</p> */}
                    </span>
                </div>
            </div>
            <span>
                <button
                    className={styles.closeMovie}
                    onClick={() => handleRemoveMovieList(imdbID)}
                >
                    <Emoji txt="❌" />
                </button>
            </span>
        </div>
    );
}

export default WatchedMovie;
