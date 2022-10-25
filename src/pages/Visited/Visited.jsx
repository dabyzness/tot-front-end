import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import RestaurantCardRow from "../../components/RestaurantCardRow/RestaurantCardRow";

const Visited = (props) => {
  const location = useLocation()
  const [visited,setVisited] = useState(location.state)
  const [mostRecent, setMostRecent] = useState(visited)
  const [topRated, setTopRated] = useState(visited)
  const [totFavorites, setTotFavorites] = useState(visited)

  return ( 
    <div>
      <h1>Visited Restaurants</h1>
      <ul>
        <RestaurantCardRow title="Most Recent" restaurants={mostRecent}/>
        <RestaurantCardRow title="Top Rated" restaurants={topRated}/>
        <RestaurantCardRow title="ToT Favorites" restaurants={totFavorites}/>
      </ul>
    </div>
  );
}

export default Visited;