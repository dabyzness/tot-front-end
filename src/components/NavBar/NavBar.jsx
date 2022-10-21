import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import home from "./home.svg";
import search from "./search.svg";
import add from "./add-outline.svg";
import tot from "./tot.png";
import wishlist from "./bookmark.svg";

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav className={styles.bar}>
      {user ? (
        <>
          {/* <div className='icon'><Link to="/profiles">Profiles</Link></div>
          <div className='icon'><Link to="" onClick={handleLogout}>LOG OUT</Link></div>
          <div className='icon'><Link to="/changePassword">Change Password</Link></div> */}
          <div className="icon">
            <Link to="/home">
              <img src={home} alt="home" />
            </Link>
          </div>
          <div className="icon">
            <Link to="/search">
              <img src={search} alt="search" />
            </Link>
          </div>
          <div className="icon">
            <Link to="/new">
              <img src={add} alt="new post icon" />
            </Link>
          </div>
          <div className="icon">
            <Link to="/wishlist">
              <img src={wishlist} alt="wishlist" />
            </Link>
          </div>
          <div className="icon">
            <Link to="/profile">
              <img src={tot} alt="your profile" />
            </Link>
          </div>
        </>
      ) : (
        <ul>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
