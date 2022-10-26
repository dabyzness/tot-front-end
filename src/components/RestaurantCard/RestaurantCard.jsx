import { Link } from "react-router-dom";
import pancakes from "../../assets/restaurant-cons/american-pancakes.png"

const RestaurantCard = (props) => {
  return ( 
    <div style={{width:"90px",height:"160px",backgroundColor:"darkgrey",textAlign:"center"}}>
      <Link to={`/restaurant/${props.restaurant._id}`}>
        <h4 style={{margin:"5px 0"}}>{props.restaurant.name}</h4>
        <img src={pancakes} alt="pancakes" style={{width:"50px"}}/>
        <p style={{margin:"5px 0"}}>Rating:</p>
        <p style={{margin:"5px 0 0 0"}}> 4 </p>
      </Link>
    </div>
  );
}

export default RestaurantCard;