
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";

const Visited = (props) => {
  return ( 
    <div>
      <h1>Visited Restaurants</h1>
      <ul>
        <li style={{listStyleType:"none"}}>
          <h3> Most recent</h3>
          <div style={{display:"flex",gap:"10px"}}>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
          </div>
        </li>
        <li style={{listStyleType:"none"}}>
          <h3> Your Top Rated </h3>
          <div style={{display:"flex",gap:"10px"}}>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
          </div>
        </li>
        <li style={{listStyleType:"none"}}>
          <h3> Best of ToT </h3>
          <div style={{display:"flex",gap:"10px"}}>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Visited;