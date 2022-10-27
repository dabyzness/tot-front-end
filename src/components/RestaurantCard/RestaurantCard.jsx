import { Link } from "react-router-dom";
import styles from "./RestaurantCard.module.css"


const RestaurantCard = (props) => {
  return (
    <div className={styles.rcard}
    >
      <Link to={`/restaurant/${props.restaurant._id}`}>
        <div className={styles.cardheader}>{props.restaurant.name}</div>
        <img
          className={styles.rimg}
          src={props.restaurant.imgs[0]}
          alt="restaurant img"
          referrerPolicy="no-referrer"
        />
      </Link>
    </div>
  );
};

export default RestaurantCard;
