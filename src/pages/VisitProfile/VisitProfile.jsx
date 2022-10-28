import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./VisitProfile.module.css";
import tot from "../../assets/tot.png";
import * as profileService from "../../services/profileService";

import Loading from "../Loading/Loading";
import TTRow from "../../components/TTRow/TTRow";

const VisitProfile = (props) => {
  const { id } = useParams();
  // Visited contains the data of the profile you're visiting
  const [visited, setVisited] = useState(null);
  const [isFollowing, setIsFollowing] = useState(null);

  const handleFollow = async (id) => {
    const updatedProfile = await profileService.follow(id);
    setVisited({ ...visited, followers: updatedProfile.followed });
    props.setProfile({ ...props.profile, following: updatedProfile.following });
  };

  const handleUnfollow = async (id) => {
    const updatedProfile = await profileService.unfollow(id);
    setVisited({ ...visited, followers: updatedProfile.followed });
    props.setProfile({ ...props.profile, following: updatedProfile.following });
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await profileService.getProfile(id);
      setVisited(data);
    };
    fetchProfile();
  }, [id]);

  useEffect(() => {
    if (!visited) {
      return;
    }
    setIsFollowing(
      visited.followers.find((follower) => follower._id === props.profile._id)
    );
  }, [visited]);

  if (!visited || !props.profile) return <Loading />;

  return (
    <>
      <div className="img-holder">
        <img src={tot} alt="tot" className={styles.totavi} />
      </div>
      <h1 className={styles.phead}>{visited.name}</h1>
      <div className="page">
        <div className={styles.stats}>
          <div className={styles.stat}>
            {/* <Link to="/following" state={visited.following}>  */}
            <h2>{visited.following.length}</h2>
            <p>Following</p>
            {/* </Link> */}
          </div>
          <div className={styles.stat}>
            {/* <Link to="/followers" state={visited.followers}> */}
            <h2>{visited.followers.length}</h2>
            <p>Followers</p>
            {/* </Link> */}
          </div>
          <div className={styles.stat}>
            {/* <Link to="/shared" state={visited.shared}> */}
            <h2>{visited.shared.length}</h2>
            <p>Shared Reviews</p>
            {/* </Link> */}
          </div>
          <div className={styles.stat}>
            {/* <Link to="/visited" state={visited.visited}> */}
            <h2>{visited.visited.length}</h2>
            <p>Visited</p>
            {/* </Link> */}
          </div>
        </div>
        <div>
          {isFollowing ? (
            <button onClick={() => handleUnfollow(visited._id)}>
              Unfollow
            </button>
          ) : (
            <button onClick={() => handleFollow(visited._id)}>Follow</button>
          )}
        </div>
        <div>
          <h5>Wishlist ({visited.wishlist.length}):</h5>
          <TTRow ttreviews={visited.wishlist} />
        </div>
      </div>
    </>
  );
};

export default VisitProfile;
