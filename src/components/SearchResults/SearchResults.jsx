import SearchResultsCard from "../SearchResultsCard/SearchResultsCard";

import styles from "./SearchResults.module.css";

const SearchResults = ({ results, typeQuery }) => {
  return (
    <div className={styles.container}>
      {results.map((result, i) => (
        <SearchResultsCard
          key={`result-${i}`}
          result={result}
          typeQuery={typeQuery}
        />
      ))}
    </div>
  );
};

export default SearchResults;
