import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as restaurantService from "../../services/restaurantService"
import Map, { Marker } from 'react-map-gl';
import tot from '../../assets/tot.png';
import Loading from '../Loading/Loading';
import RatingCard from '../../components/RatingCard/RatingCard';



const RestaurantDets = (props) => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState(null)
  const [isVisited, setIsVisited] = useState(null)

  useEffect(() => {
    const fetchRestaurant = async () => {
      const data = await restaurantService.show(id)
      setRestaurant(data)
      if (props.profile.visited.some(rest => rest._id === data._id)){
        setIsVisited(true)
      } else {
        setIsVisited(false)
      }
    }
    fetchRestaurant()
  },[id, props.profile])

  let hasRatings = null

  if (!restaurant) return <Loading/>

  return (
    <>
      <Map
        initialViewState={{
          longitude: Number(restaurant.location.longitude),
          latitude: Number(restaurant.location.latitude),
          zoom: 15,
        }}
        style={{ width: '100vw', height: '200px' }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={Number(restaurant.location.longitude)}
          latitude={ Number(restaurant.location.latitude)} anchor="center">
          <p style={{ marginBottom: '-5px', color: 'black',fontSize:"25px", fontWeight:"bolder",
          backgroundColor:"rgba(255,255,255,0.75)",
          fontFamily:"quicksand"}}>
            {restaurant.name}
          </p>
          <img src={tot} alt="" style={{ height: '60px' }} />
        </Marker>
      </Map>
      {hasRatings = (restaurant?.ratings.length > 0)}
      <div><h1>{restaurant.name}</h1></div>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <div>{restaurant.cuisineType}</div>
        <div>Rating</div>
        <div>{restaurant.website}</div>
        <div>{restaurant.tags}</div>
        <br />
        { isVisited ? (
          <button>
            Update Review
          </button>
        ) : (
          <button> 
            <Link 
              to={`/restaurant/${restaurant._id}/new`}
              state={restaurant}>
              Add Review 
            </Link>
          </button>
        )}
        <br />
        {hasRatings ? (
          <div>
            Ratings( {restaurant.ratings.length} ):
            {restaurant.ratings.map(rating =>
              <RatingCard 
                rating={rating} 
                user={props.user}
                restaurant={restaurant}
                handleUpdateRating={props.handleUpdateRating}
                />
              
            )}
          </div>
        ) : (
          <div>
            Ratings:
            <div>
              This has no ratings 
            </div>
          </div>
        )}
      </div>
      <br />

      
    </>
  );
};

export default RestaurantDets;
