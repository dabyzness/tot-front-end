import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./VisitProfile.module.css";
import tot from "../../assets/tot.png";
import Loading from "../Loading/Loading";
import * as profileService from "../../services/profileService"


const VisitProfile = (props) => {

  
  const { id } = useParams()
  const [visited, setVisited] = useState(null)
  
  let isFollower = false

  const handleFollow = async (id) =>{
    const updatedProfile = await profileService.follow(id)
    setVisited(updatedProfile)
    isFollower = true
  }

  const handleUnfollow = async (id) =>{
    const updatedProfile = await profileService.unfollow(id)
    setVisited(updatedProfile)
    isFollower = false
  }

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await profileService.getProfile(id);
      setVisited(data);
    }
    fetchProfile();
  }, [id])
  


  if (!visited) return <Loading/>

  return (
    <>
      <div className="img-holder">
        <img src={tot} alt="tot" className={styles.totavi} />
      </div>
      <h1 className={styles.phead}>{visited.name}</h1>
      <div className="page">
        <div className={styles.stats}>
          <div className={styles.stat}>
            <Link to="/following" state={visited.following}> 
              <h2>{visited.following.length}</h2>
              <p>Following</p>
            </Link>
          </div>
          <div className={styles.stat}>
            <Link to="/followers" state={visited.followers}>
              <h2>{visited.followers.length}</h2>
              <p>Followers</p>
            </Link>
          </div>
          <div className={styles.stat}>
            <Link to="/shared" state={visited.shared}>
              <h2>{visited.shared.length}</h2>
              <p>Shared Reviews</p>
            </Link>
          </div>
          <div className={styles.stat}>
            <Link to="/visited" state={visited.visited}>
              <h2>{visited.visited.length}</h2>
              <p>Visited</p>
            </Link>
          </div>
        </div>
        <div>
          {isFollower ? (
            <button onClick={() => handleUnfollow(visited._id)}>Unfollow</button>
          ) : (
            <button onClick={()=>handleFollow(visited._id)}>Follow</button>
          )}
        </div>
        <div>
          <p>Wishlist: {visited.wishlist.length}</p>
        </div>
      </div>
    </>
  );
};

export default VisitProfile;
