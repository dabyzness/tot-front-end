import { useState } from "react";
import { useLocation } from "react-router-dom";
import RestaurantCardRow from "../../components/RestaurantCardRow/RestaurantCardRow";
import tot from "../../assets/tot.png";

const Visited = (props) => {
  const location = useLocation()
  const [visited,setVisited] = useState(location.state)
  const [mostRecent, setMostRecent] = useState(visited)
  const [topRated, setTopRated] = useState(visited)
  const [totFavorites, setTotFavorites] = useState(visited)

  return ( 
    <div>
      <h1>Visited Restaurants</h1>
      {(visited.length === 0) ? (
        <>
          <br />
          <h4 style={{textAlign:"center"}}> You have visited no restaurants </h4>
          <img src={tot} alt="ToT" style={{width:"95vw"}} />
          <h4 style={{textAlign:"center"}}> Add restaurants to your visited<br/> by adding a rating on a restaurant details page </h4>
        </>
      ):(
        <ul>
          <RestaurantCardRow title="Most Recent" restaurants={mostRecent}/>
          <RestaurantCardRow title="Top Rated" restaurants={topRated}/>
          <RestaurantCardRow title="ToT Favorites" restaurants={totFavorites}/>
        </ul>
      )}


    </div>
  );
}

export default Visited;
