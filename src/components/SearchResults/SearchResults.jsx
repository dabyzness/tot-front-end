import SearchResultsCard from "../SearchResultsCard/SearchResultsCard";

import styles from "./SearchResults.module.css";

const SearchResults = ({ results, typeQuery }) => {
  return (
    <ul className={styles.container}>
      {results.map((result, i) => (
        <SearchResultsCard
          key={`result-${i}`}
          result={result}
          typeQuery={typeQuery}
        />
      ))}
    </ul>
  );
};

export default SearchResults;
