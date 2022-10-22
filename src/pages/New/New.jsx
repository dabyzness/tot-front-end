import { Link } from "react-router-dom";

const New = () => {
  return ( 
    <>
      <h1>I'm the new tiktok page</h1>
      <Link to="/restaurants/new">
        <h2>Add New Restaurant</h2>
      </Link>
    </>
  );
}

export default New;