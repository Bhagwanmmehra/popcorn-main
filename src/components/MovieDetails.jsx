import styles from "../styles/MovieDetails.module.css";
import Emoji from "./Emoji";
import StarRating from "./StarRating";

// const movie = {
//     title: "Spider-Man: No Way Home",
//     poster: "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_SX300.jpg",
//     runtime: "148 min",
//     imdbRating: "8.2",
//     plot: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
//     released: "17 Dec 2021",
//     actors: "Tom Holland, Zendaya, Benedict Cumberbatch",
//     director: "Jon Watts",
//     genre: "Action, Adventure, Fantasy",
// };

// function MovieDetails({ movie }) {
function MovieDetails({
    movieDetails,
    handleCloseMovieDetail,
    handleAddMovieToWatchList,
}) {
    const {
        Title,
        Poster,
        Runtime,
        imdbRating,
        Plot,
        Released,
        Actors,
        Director,
        Genre,
    } = movieDetails;

    function handleAction(userRating) {
        handleAddMovieToWatchList(movieDetails, userRating);
    }

    return (
        <div className={styles.movieDetails}>
            <button
                className={styles.closeMovie}
                onClick={handleCloseMovieDetail}
            >
                <Emoji txt="❌" />
            </button>
            <div className={styles.details}>
                <img src={Poster} alt={Title} />
                <div>
                    <h3>{Title}</h3>
                    <p>
                        {Released} {Runtime} {Genre}
                    </p>
                    <p>
                        <Emoji txt="🍅" /> {imdbRating} Tomatos
                    </p>
                </div>
            </div>
            <StarRating
                color="red"
                defaultRating={5}
                size={10}
                action={handleAction}
            />
            <div className={styles.description}>
                <p>
                    <strong>PLOT : </strong>
                    {Plot}
                </p>
                <p>
                    <strong>Starring by : </strong>
                    {Actors}
                </p>
                <p>
                    <strong>Directed by : </strong>
                    {Director}
                </p>
            </div>
        </div>
    );
}

export default MovieDetails;
