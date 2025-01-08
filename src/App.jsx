import { useEffect, useState } from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";
import "./global.css";

const KEY = "ec80a3bd";
export const API_URL = `http://www.omdbapi.com/?apikey=${KEY}`;

function App() {
    // states
    const [query, setQuery] = useState("spider");
    const [movies, setMovies] = useState([]);
    const [watchList, setWatchList] = useState([]);
    const [movieDetails, setMovieDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingMovieDetails, setIsLoadingMovieDetails] = useState(false);

    // local storage
    localStorage.setItem("watchedMovielist", JSON.stringify(watchList));
    // derive state
    const resultCount = movies.length;
    const activeMovieID = movieDetails?.imdbID;

    // useEffect(function(), [])
    // when movieDetails is null it is first click
    //Effects
    useEffect(
        function () {
            async function fetchMovies() {
                setIsLoading(true);
                setMovies([]);

                const response = await fetch(`${API_URL}&s=${query}`);
                const data = await response.json();

                setIsLoading(false);
                setMovies(data.Search || []);
            }
            if (query.length >= 3) fetchMovies();
            else {
                setMovies([]);
                setMovieDetails(null);
            }
        },
        [query]
    );

    function handleChangeSearchQuery(e) {
        setQuery(e.target.value);
    }

    async function handleMovieCardClick(imdbID) {
        if (movieDetails?.imdbID === imdbID) {
            setMovieDetails(null);
            // here optional chaining is used
            return;
        }

        setIsLoadingMovieDetails(true);
        setMovieDetails(null);

        const response = await fetch(`${API_URL}&i=${imdbID}`);
        const data = await response.json();
        setIsLoadingMovieDetails(false);
        setMovieDetails(data);
    }

    function handleCloseMovieDetail() {
        setMovieDetails(null);
    }

    function handleAddMovieToWatchList(movieDeatils, userRating) {
        const watchedMovie = {
            name: movieDeatils.Title,
            poster: movieDeatils.Poster,
            releaseDate: movieDeatils.Released,
            runtime: movieDeatils.Runtime,
            imdbRating: Number(movieDeatils.imdbRating),
            userRating: userRating,
            imdbID: movieDeatils.imdbID,
        };

        const index = watchList.findIndex(function (movie) {
            return movie.imdbID === movieDeatils.imdbID;
        });

        if (index !== -1) {
            watchList[index] = watchedMovie;
            setWatchList(function (watchList) {
                localStorage.setItem(
                    "watchedMovielist",
                    JSON.stringify(watchList)
                );
                return [...watchList];
            });
        } else {
            setWatchList(function (watchList) {
                return [...watchList, watchedMovie];
            });
        }
        // setWatchList(function (watchList) {
        //     return [...watchList, watchedMovie];
        // });
    }

    function handleRemoveMovieList(imdbID) {
        setWatchList(function (watchList) {
            watchList = watchList.filter(function (movie) {
                return movie.imdbID !== imdbID;
            });
            localStorage.setItem("watchedMovielist", JSON.stringify(watchList));
            return [...watchList];
        });
    }

    return (
        <div>
            <Nav
                handleChange={handleChangeSearchQuery}
                query={query}
                resultCount={resultCount}
            />
            <Main
                movies={movies}
                handleMovieCardClick={handleMovieCardClick}
                movieDetails={movieDetails}
                watchList={watchList}
                activeMovieID={activeMovieID}
                isLoading={isLoading}
                handleCloseMovieDetail={handleCloseMovieDetail}
                handleAddMovieToWatchList={handleAddMovieToWatchList}
                isLoadingMovieDetails={isLoadingMovieDetails}
                handleRemoveMovieList={handleRemoveMovieList}
            />
        </div>
    );
}

export default App;
