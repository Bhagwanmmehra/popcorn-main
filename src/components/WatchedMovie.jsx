import styles from "../styles/WatchedMovie.module.css";
import Emoji from "./Emoji";

function WatchedMovie({ image, name, imdbRating, userRating, runtime }) {
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
                        <p>{runtime}</p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default WatchedMovie;
