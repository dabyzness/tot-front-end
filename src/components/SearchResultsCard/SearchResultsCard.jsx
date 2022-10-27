import { Link } from "react-router-dom";
import styles from "./SearchResultsCard.module.css";

import tot from "../../assets/tot.png";

const SearchResultsCard = ({ result, typeQuery }) => {
  if (result.wishlist) {
    return (
      <Link to={`/profile/${result._id}`}>
        <div className={styles.container}>
          <img className={styles.profileImg} src={tot} alt="profile-tot" />
          <div className={styles.infoContainer}>
            <h4>{result.name}</h4>
            <p>
              Followers: {result.followers.length} Following:{" "}
              {result.following.length}
            </p>
            <p>
              Shared: {result.shared.length} Visited: {result.visited.length}
            </p>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`../restaurant/${result._id}`}>
      <div className={styles.container}>
        <img
          className={styles.restaurantImg}
          src={result.imgs[0]}
          alt={result.name}
        />
        <div className={styles.infoContainer}>
          <h4>{result.name}</h4>
          <p>Cuisine-type: {result.cuisineType[0]}</p>
          <p>TikToks: {1}</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultsCard;
