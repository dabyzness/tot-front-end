import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Profile.module.css";
import tot from "../../assets/tot.png";
import * as profileService from '../../services/profileService'
import Loading from "../Loading/Loading";


const Profile = (props) => {
  console.log("Profile:",props.user.profile)
  const [profile, setProfile] = useState(null)

  useEffect(() =>{
    const fetchProfile = async () => {
      const data = await profileService.getProfile(props.user.profile)
      setProfile(data)
      console.log(profile)
    }
    fetchProfile()

  }, [])

  if (!profile) return <Loading/>

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
            <Link to="/following"> 
              <h2>{profile.following.length}</h2>
              <p>Following</p>
            </Link>
          </div>
          <div className={styles.stat}>
            <Link to="/followers">
              <h2>{profile.followers.length}</h2>
              <p>Followers</p>
            </Link>
          </div>
          <div className={styles.stat}>
            <Link to="/shared">
              <h2>{profile.shared.length}</h2>
              <p>Shared Reviews</p>
            </Link>
          </div>
          <div className={styles.stat}>
            <Link to="/visited">
              <h2>{profile.visited.length}</h2>
              <p>Visited</p>
            </Link>
          </div>
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
