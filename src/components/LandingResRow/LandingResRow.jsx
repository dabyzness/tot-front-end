import RestaurantCard from "../RestaurantCard/RestaurantCard";

import styles from "../../components/TTRow/Row.module.css"

const LandingResRow = ({restaurants}) => {
  return ( 
    <div className={styles.row}>
      {restaurants.map((restaurant, i) => <RestaurantCard restaurant={restaurant} key={i}/>)}
      {/* <TTCard ttreviews={ttreviews}/> */}
    </div>
  )
}
 
export default LandingResRow;