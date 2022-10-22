import { Link } from "react-router-dom";

const Profile = (props) => {
  return (
    <>
      <h1>I'm your profile page</h1>
      <div className="icon">
        <Link to="" onClick={props.handleLogout}>
          LOG OUT
        </Link>
      </div>
    </>
  );
};

export default Profile;
