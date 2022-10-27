import { Link } from "react-router-dom";
import tot from "../../assets/tot.png";
import styles from "./ProfileLI.module.css";

const ProfileLI = (props) => {
  return ( 
    <li className={styles.profileLi}>
      <Link className={styles.profileA} to={`/profile/${props.profile._id}`}>
        <div className={styles.container}>
          <img className={styles.profileImg} src={tot} alt="profile-tot" />
          <div className={styles.infoContainer}>
            <h4>{props.profile.name}</h4>
            <p>
              Followers: {props.profile.followers.length} Following:{" "}
              {props.profile.following.length}
            </p>
            <p>
              Shared: {props.profile.shared.length} Visited: {props.profile.visited.length}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default ProfileLI;