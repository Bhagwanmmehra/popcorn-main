import Box1 from "./Box1";
import Box2 from "./Box2";
import styles from "../styles/Main.module.css";

function Main({
    movies,
    handleMovieCardClick,
    movieDetails,
    activeMovieID,
    isLoading,
    isLoadingMovieDetails,
    handleCloseMovieDetail,
    handleAddMovieToWatchList,
    watchList,
}) {
    return (
        <main className={styles.main}>
            <Box1
                movies={movies}
                handleMovieCardClick={handleMovieCardClick}
                activeMovieID={activeMovieID}
                isLoading={isLoading}
            />
            <Box2
                movieDetails={movieDetails}
                isLoadingMovieDetails={isLoadingMovieDetails}
                handleCloseMovieDetail={handleCloseMovieDetail}
                handleAddMovieToWatchList={handleAddMovieToWatchList}
                watchList={watchList}
            />
        </main>
    );
}

export default Main;
