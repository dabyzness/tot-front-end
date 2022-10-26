import { Link } from "react-router-dom";
import styles from "./SearchResultsCard.module.css";

import tot from "../../assets/tot.png";

const SearchResultsCard = ({ result, typeQuery }) => {
  if (result.wishlist) {
    return (
      <div className={styles.container}>
        <Link to={`/profile/${result._id}`}>
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
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Link to={`../restaurant/${result._id}`}>
        <img
          className={styles.restaurantImg}
          src="https://lh5.googleusercontent.com/p/AF1QipPgHYE4DbQFDRZ3CT9CaY8LTkTE4dw6_3d_zpyO=w408-h306-k-no"
          alt={result.name}
          />
        <div className={styles.infoContainer}>
          <h4>{result.name}</h4>
          <p>Cuisine-type: {result.cuisineType[0]}</p>
          <p>TikToks: {1}</p>
        </div>
      </Link>
    </div>
  );
};

export default SearchResultsCard;
