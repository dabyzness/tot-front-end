import { Link } from "react-router-dom";
import styles from "./Profile.module.css";
import tot from "../../assets/tot.png";
import Loading from "../Loading/Loading";


const Profile = (props) => {

  if (!props.profile) return <Loading/>

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
          <div className={styles.stat}>
            <Link to="/following" state={props.profile.following}> 
              <h2>{props.profile.following.length}</h2>
              <p>Following</p>
            </Link>
          </div>
          <div className={styles.stat}>
            <Link to="/followers" state={props.profile.followers}>
              <h2>{props.profile.followers.length}</h2>
              <p>Followers</p>
            </Link>
          </div>
          <div className={styles.stat}>
            <Link to="/shared" state={props.profile.shared}>
              <h2>{props.profile.shared.length}</h2>
              <p>Shared Reviews</p>
            </Link>
          </div>
          <div className={styles.stat}>
            <Link to="/visited" state={props.profile.visited}>
              <h2>{props.profile.visited.length}</h2>
              <p>Visited</p>
            </Link>
          </div>
        </div>
        <div>
          <button>Customize Profile</button>
        </div>
        <div>
          <p>Wishlist: {props.profile.wishlist.length}</p>
        </div>
      </div>
    </>
  );
};

export default Profile;
