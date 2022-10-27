import Loading from "../../pages/Loading/Loading";
import RestaurantCard from "../RestaurantCard/RestaurantCard";

const RestaurantCardRow = (props) => {
  if (!props.restaurants) return <Loading />;
  return (
    <li style={{ listStyleType: "none" }}>
      <h3> {props.title} </h3>
      <div style={{ display: "flex", gap: "10px" }}>
        {props.restaurants.map((restaurant) => (
          <RestaurantCard
            key={`${props.title}-${restaurant.name}`}
            restaurant={restaurant}
          />
        ))}
      </div>
    </li>
  );
};

export default RestaurantCardRow;
