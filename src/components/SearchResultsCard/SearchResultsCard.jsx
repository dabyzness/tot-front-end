import { Link } from "react-router-dom";
import styles from "./SearchResultsCard.module.css";

import tot from "../../assets/tot.png";

import ProfileLI from "../ProfileLI/ProfileLI";

const SearchResultsCard = ({ result, typeQuery }) => {
  if (result.wishlist) {
    return (
      <ProfileLI profile={result}/>
    );
  }

  return (
    <Link className={styles.restLink} to={`../restaurant/${result._id}`}>
      <div className={styles.container}>
        <img
          className={styles.restaurantImg}
          src={result.imgs[0]}
          alt={result.name}
        />
        <div className={styles.infoContainer}>
          {(result.name.length < 25) ? (
            <h4>{result.name}</h4>
          ):(
            <h4>{`${result.name.slice(0,23)}...`}</h4>
          )}
          <p>Cuisine-type: {result.cuisineType[0]}</p>
          <p>TikToks: {1}</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultsCard;
