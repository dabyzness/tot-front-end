import { useState, useEffect } from "react";

import SearchResults from "../../components/SearchResults/SearchResults.jsx";
import { search } from "../../services/searchService.js";
import Tag from "../../components/Tag/Tag";
import { tagNames } from "../../assets/data/tagNames.js";
import styles from "./Search.module.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeQuery, setTypeQuery] = useState("restaurant");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!searchTerm) {
      setResults([]);
      return;
    }

    const getSearchResults = async () => {
      const data = await search(searchTerm, typeQuery);
      setResults(data);
    };

    getSearchResults();
  }, [searchTerm, typeQuery]);

  return (
    <main>
      <h1>Search</h1>
      <input
        className={styles.inputSearch}
        type="text"
        placeholder="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        required
      />
      <div className={styles.catContainer}>
      <label htmlFor="type">Search By</label>
      <select
        name="type"
        id="type"
        onChange={(e) => setTypeQuery(e.target.value)}
      >
        <option value="restaurant">Restaurant</option>
        <option value="profile">Profile</option>
        <option value="tags">Tags</option>
        <option value="cuisine">Cuisine</option>
      </select>
      </div>

      {typeQuery === "tags" && (
        <div className={styles.tagContainer}>
          {tagNames
            .sort((a, b) => (a < b ? -1 : 1))
            .map((tagName) => (
              <Tag
                key={tagName}
                name={tagName}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                addedTags={[]}
              />
            ))}
        </div>
      )}

      {results.length !== 0 && (
        <SearchResults results={results} typeQuery={typeQuery} />
      )}
    </main>
  );
};

export default Search;
