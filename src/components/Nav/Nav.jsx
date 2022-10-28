import { Link, NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import home from "./home.svg";
import search from "./search.svg";
import add from "./add-outline.svg";
import tot from "./tot.png";
import wishlist from "./bookmark.svg";

const Nav = ({ user, handleLogout }) => {
  return (
    <nav className={styles.bar}>
      {user ? (
        <>
          {/* <div className='icon'><Link to="/profiles">Profiles</Link></div>
          <div className='icon'><Link to="" onClick={handleLogout}>LOG OUT</Link></div>
          <div className='icon'><Link to="/changePassword">Change Password</Link></div> */}
          <div className="icon">
            <NavLink to="/">
              <img src={home} alt="home" title="Home"/>
            </NavLink>
          </div>
          <div className="icon">
            <NavLink to="/search">
              <img src={search} alt="search" title="Search" />
            </NavLink>
          </div>
          <div className="icon">
            <NavLink to="/new">
              <img src={add} alt="new post icon" title="New TikTok/Restaurant" />
            </NavLink>
          </div>
          <div className="icon">
            <NavLink to="/wishlist">
              <img src={wishlist} alt="wishlist" title="Wishlist" />
            </NavLink>
          </div>
          <div className="icon">
            <NavLink to="/profile">
              <img src={tot} alt="your profile" title="Your Profile" />
            </NavLink>
          </div>
        </>
      ) : (
        <>
          <div className="icon">
            <NavLink to="/">
              <img src={home} alt="home" title="Home" />
            </NavLink>
          </div>
          <div className="icon">
            <NavLink to="/search">
              <img src={search} alt="search" title="Search"/>
            </NavLink>
          </div>
          <div>
            <NavLink to="/login">Log In/Sign Up</NavLink>
          </div>
        </>
      )}
    </nav>
  );
};

export default Nav;
