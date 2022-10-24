import ProfileLI from "../../components/ProfileLI/ProfileLI";

const Following = (props) => {
  return ( 
    <>
      <h1> Profile Name </h1>
      <h3> Following (#) Accounts</h3>
      <ul>
        <ProfileLI/>
        <ProfileLI/>
        <ProfileLI/>
        <ProfileLI/>
      </ul>
    </>
  );
}

export default Following;