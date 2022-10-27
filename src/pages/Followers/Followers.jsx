import ProfileLI from "../../components/ProfileLI/ProfileLI";

const Followers = (props) => {
  return ( 
    <>
      <h1>Profile Name</h1>
      <h3>Number of followers ( {props.profile.followers.length} )</h3>
      <ul>
        {props.profile.followers.map(follower => 
          <ProfileLI key={follower._id} profile={follower}/>
          )}
      </ul>
    </>
  );
}

export default Followers;