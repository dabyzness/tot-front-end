import Map, { Marker } from 'react-map-gl';
import tot from '../../assets/tot.png';

const RestaurantDets = (props) => {
  const restaurant = {
    _id: {
      $oid: '635443a1f4bdc00112f34c3d',
    },
    name: 'McDonalds',
    location: {
      latitude: '42.111',
      longitude: '42.111',
    },
    website: 'https://www.mcdonalds.com/us/en-us.html',
    cuisineType: ['Fancy'],
    tags: ['First Date'],
    createdAt: {
      $date: '2022-10-22T19:25:21.741Z',
    },
    updatedAt: {
      $date: '2022-10-22T19:25:21.741Z',
    },
    __v: 0,
  };

  return (
    <>
      <div><h1>Restaurant Name</h1></div>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <div>Cuisine Type</div>
        <div>Rating</div>
        <div>Website</div>
        <div>Tags</div>
        <br />
        <button>Visited</button>
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
          longitude: -73.99130137,
          latitude: 40.7012968,
          zoom: 15,
        }}
        style={{ width: '100vw', height: '200px' }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={-73.99130137}
          latitude={40.7012968} anchor="center">
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
