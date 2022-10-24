import { Link, useNavigate } from "react-router-dom";
import styles from "./Profile.module.css";
import tot from "../../assets/tot.png";

const Profile = (props) => {
  return (
    <>
      <div className={styles.pn}>
        <Link to="/change-password" className={styles.logout}>
          Change Password
        </Link>
        <Link to="" onClick={props.handleLogout} className={styles.logout}>
          LOG OUT
        </Link>
      </div>
      <div className="img-holder">
        <img src={tot} alt="tot" className={styles.totavi} />
      </div>
      <h1 className={styles.phead}>{props.user.name}</h1>
      <div className="page">
        <div className={styles.stats}>
          <div className={styles.stat}>following</div>
          <div className={styles.stat}>followers</div>
          <div className={styles.stat}>shared reviews</div>
          <div className={styles.stat}>visited</div>
        </div>
        <div>
          <button>Customize Profile</button>
        </div>
        <div>Wishlist</div>
      </div>
    </>
  );
};

export default Profile;
