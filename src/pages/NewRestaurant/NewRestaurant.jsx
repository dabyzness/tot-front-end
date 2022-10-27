import { useState } from "react";
import RestaurantSnackbar from "../../components/RestaurantSnackBar/RestaurantSnackBar";
const NewRestaurant = (props) => {
  const [url, setUrl] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddRestaurant(url);
    setUrl("")
  };

  const handleResChange = (e) => {
    if (e.target.value) {
      setIsDisabled(false);
    }
    if (e.target.value === "") {
      setIsDisabled(true);
    }
    setUrl(e.target.value)
  }

  return (
    <div>
      <h3> Add Restaurant </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="url"
          value={url}
          placeholder="GoogleMaps URL"
          onChange={handleResChange}
          // onChange={(e) => setUrl(e.target.value)}
        />
        <RestaurantSnackbar disabled={isDisabled} />
      </form>
    </div>
  );
};

export default NewRestaurant;
