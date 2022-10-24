import ProfileLI from "../../components/ProfileLI/ProfileLI";

const Followers = (props) => {
  return ( 
    <>
      <h1>Profile Name</h1>
      <h3>Number of followers (#)</h3>
      <ul>
        <ProfileLI/>
        <ProfileLI/>
        <ProfileLI/>
        <ProfileLI/>
      </ul>
    </>
  );
}

export default Followers;