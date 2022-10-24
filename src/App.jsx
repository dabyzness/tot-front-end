// npm modules
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

// page components
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Landing from "./pages/Landing/Landing";
import Profiles from "./pages/Profiles/Profiles";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import Home from "./pages/Home/Home"
import Search from "./pages/Search/Search";
import New from "./pages/New/New";
import Wishlist from "./pages/Wishlist/Wishlist";
import Shared from "./pages/Shared/Shared";
import Profile from "./pages/Profile/Profile";
import NewRestaurant from "./pages/NewRestaurant/NewRestaurant";

// components
import Nav from "./components/Nav/Nav";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

// services
import * as authService from "./services/authService";
import * as restaurantService from "./services/restaurantService"
import * as ttreviewService from "./services/ttreviewService"

// styles
import "./App.css";
import Followers from "./pages/Followers/Followers";

const App = () => {
  const [user, setUser] = useState(authService.getUser());
  const navigate = useNavigate();
  const [restaurants,setRestaurants]=useState([])
  const [ttreviews,setTTReviews]=useState([])

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    navigate("/");
  };
  
  const handleSignupOrLogin = () => {
    setUser(authService.getUser());
  };
  
  const handleAddRestaurant = async (restaurantData) => {
    const newRestaurant = await restaurantService.create(restaurantData)
    setRestaurants([newRestaurant, ...restaurants])
    navigate('/restaurants')
  }

  const handleAddTTReview = async (ttreviewData) => {
    const newTTReview = await ttreviewService.create(ttreviewData)
    setTTReviews([newTTReview, ...ttreviews])
    navigate('/reviews')
  }

  useEffect(() => {
    const fetchAllRestaurants = async () => {
      const data = await restaurantService.index()
      setRestaurants(data)
    }
    const fetchAllTTReviews = async () => {
      const data = await ttreviewService.index()
      setTTReviews(data)
    }
    fetchAllRestaurants()
    fetchAllTTReviews()
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/home"
          element={<Home />} 
        />
        <Route 
          path="/search"
          element={<Search />}
        />
        <Route 
          path="/new"
          element={
            <ProtectedRoute user={user}>
              <New 
                user={user}
                handleAddTTReview={handleAddTTReview}
              />
            </ProtectedRoute>}
        />
        <Route 
          path="/wishlist"
          element={
            <ProtectedRoute user={user}>
              <Wishlist />
            </ProtectedRoute>}
        />
        <Route 
          path="/shared"
          element={
            <ProtectedRoute user={user}>
              <Shared 
                user={user}
              />
            </ProtectedRoute>}
        />
        <Route 
          path="/followers"
          element={
            <ProtectedRoute user={user}>
              <Followers 
                user={user}
              />
            </ProtectedRoute>}
        />
        <Route 
          path="/restaurants/new"
          element={
            <ProtectedRoute user={user}>
              <NewRestaurant 
                user={user}
                handleAddRestaurant={handleAddRestaurant}
              />
            </ProtectedRoute>}
        />
        <Route 
          path="/profile"
          element={
            <ProtectedRoute user={user}>
              <Profile handleLogout={handleLogout} user={user}/>
            </ProtectedRoute>
          }
        />
         {/* <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        /> */}
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        /> 
      </Routes>
      <Nav user={user} handleLogout={handleLogout} />
    </>
  );
};

export default App;
