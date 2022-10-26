import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as restaurantService from "../../services/restaurantService"
import Map, { Marker } from 'react-map-gl';
import tot from '../../assets/tot.png';
import Loading from '../Loading/Loading';



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



  if (!restaurant) return <Loading/>

  return (
    <>
      <div><h1>{restaurant.name}</h1></div>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <div>{restaurant.cuisineType}</div>
        <div>Rating</div>
        <div>{restaurant.website}</div>
        <div>{restaurant.tags}</div>
        <br />
        { isVisited ? (
          <button>Visited</button>
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
        <div>
          Reviews:
          <div>
            Review 1
          </div>
          <div>
            Review 2
          </div>
          <div>
            Review 3
          </div>
        </div>
      </div>
      <br />

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
    </>
  );
};

export default RestaurantDets;
