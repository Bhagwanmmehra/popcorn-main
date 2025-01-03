import styles from "../styles/Search.module.css";

function Search({ handleChange, query }) {
    return (
        <form className={styles.search}>
            <input type="text" onChange={handleChange} value={query} />
            <button>Search</button>
        </form>
    );
}

export default Search;
