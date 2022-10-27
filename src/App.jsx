// npm modules
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// page components
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Landing from "./pages/Landing/Landing";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import New from "./pages/New/New";
import Wishlist from "./pages/Wishlist/Wishlist";
import NewRestaurant from "./pages/NewRestaurant/NewRestaurant";
import RestaurantDets from "./pages/RestaurantDets/RestaurantDets";
import NewRating from "./pages/NewRating/NewRating";
import Profile from "./pages/Profile/Profile";
import VisitProfile from "./pages/VisitProfile/VisitProfile";
import Followers from "./pages/Followers/Followers";
import Following from "./pages/Following/Following";
import Shared from "./pages/Shared/Shared";
import Visited from "./pages/Visited/Visited";

// components
import Nav from "./components/Nav/Nav";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

// services
import * as authService from "./services/authService";
import * as profileService from "./services/profileService";
import * as restaurantService from "./services/restaurantService";
import * as ttreviewService from "./services/ttreviewService";

// styles
import "./App.css";

const App = () => {
  const [user, setUser] = useState(authService.getUser());
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);
  const [ttreviews, setTTReviews] = useState([]);

  const [profile, setProfile] = useState(null);

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    navigate("/");
  };

  const handleSignupOrLogin = () => {
    setUser(authService.getUser());
  };

  const handleAddRestaurant = async (restaurantData) => {
    const newRestaurant = await restaurantService.create(restaurantData);
    setRestaurants([newRestaurant, ...restaurants]);
  };

  const handleAddRating = async (id, ratingData) => {
    const updatedRest = await restaurantService.createRating(id, ratingData);
    setRestaurants(
      restaurants.filter((r) => r._id !== updatedRest._id),
      updatedRest
    );
    navigate(`/restaurant/${updatedRest._id}`);
  };

  const handleUpdateRating = async (id, ratingid, ratingData) => {
    const updatedRest = await restaurantService.updateRating(
      id,
      ratingid,
      ratingData
    );
    setRestaurants(
      restaurants.filter((r) => r._id !== updatedRest._id),
      updatedRest
    );
    navigate(`/restaurant/${updatedRest._id}`);
  };

  const handleAddTTReview = async (ttreviewData) => {
    const newTTReview = await ttreviewService.create(ttreviewData);
    setTTReviews([newTTReview, ...ttreviews]);
  };

  const handleDeleteTTReview = async (id) => {
    const deletedTTReview = await ttreviewService.delete(id);
    setTTReviews(ttreviews.filter((r) => r._id !== deletedTTReview._id));
    return deletedTTReview;
  };

  useEffect(() => {
    if (!user) {
      setProfile(null);
      return;
    }
    const fetchProfile = async () => {
      const data = await profileService.getProfile(user.profile);
      setProfile(data);
    };
    fetchProfile();
  }, [user]);

  useEffect(() => {
    const fetchAllRestaurants = async () => {
      const data = await restaurantService.index();
      setRestaurants(data);
    };
    const fetchAllTTReviews = async () => {
      const data = await ttreviewService.index();

      const refreshedData = await Promise.all(
        data.map(async (review) => {
          if (
            !review.expiresAt ||
            review.expiresAt < new Date().getTime() / 1000
          ) {
            const refreshedReview = await ttreviewService.refreshTTData(
              review._id
            );

            return refreshedReview;
          }

          return review;
        })
      );

      setTTReviews(refreshedData);
    };

    fetchAllRestaurants();
    fetchAllTTReviews();
  }, []);

  return (
    <>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                user={user}
                restaurants={restaurants}
                ttreviews={ttreviews}
              />
            }
          />
          <Route
            path="/signup"
            element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
          />
          <Route
            path="/login"
            element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
          />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route
            path="/new"
            element={
              <ProtectedRoute user={user}>
                <New user={user} handleAddTTReview={handleAddTTReview} handleAddRestaurant={handleAddRestaurant} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/wishlist"
            element={
              <ProtectedRoute user={user}>
                <Wishlist profile={profile} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/shared"
            element={
              <ProtectedRoute user={user}>
                <Shared
                  user={user}
                  ttreviews={ttreviews}
                  setTTReviews={setTTReviews}
                  handleDeleteTTReview={handleDeleteTTReview}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/followers"
            element={
              <ProtectedRoute user={user}>
                <Followers user={user} profile={profile}/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/following"
            element={
              <ProtectedRoute user={user}>
                <Following user={user} profile={profile}/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/visited"
            element={
              <ProtectedRoute user={user}>
                <Visited user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/restaurants/new"
            element={
              <ProtectedRoute user={user}>
                <NewRestaurant
                  user={user}
                  handleAddRestaurant={handleAddRestaurant}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/restaurant/:id"
            element={
              <ProtectedRoute user={user}>
                <RestaurantDets
                  user={user}
                  profile={profile}
                  handleUpdateRating={handleUpdateRating}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/restaurant/:id/new"
            element={
              <ProtectedRoute user={user}>
                <NewRating handleAddRating={handleAddRating} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/restaurants/rating/new"
            element={
              <ProtectedRoute user={user}>
                <NewRating handleAddRating={handleAddRating} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute user={user}>
                <Profile
                  user={user}
                  profile={profile}
                  handleLogout={handleLogout}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/:id"
            element={
              <ProtectedRoute user={user}>
                <VisitProfile profile={profile} />
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
      </main>
      <Nav user={user} handleLogout={handleLogout} />
    </>
  );
};

export default App;
