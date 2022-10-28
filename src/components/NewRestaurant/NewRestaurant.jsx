import { useState } from 'react';
import RestaurantSnackbar from '../RestaurantSnackBar/RestaurantSnackBar';
const NewRestaurant = (props) => {
  const [url, setUrl] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddRestaurant(url);
    setUrl('');
  };

  const handleResChange = (e) => {
    if (e.target.value) {
      setIsDisabled(false);
    }
    if (e.target.value === '') {
      setIsDisabled(true);
    }
    setUrl(e.target.value);
  };

  return (
    <div style={{ textAlign: "center"}}>
      <h3> Don't See the Restaurant? Add It Below! </h3>
      <form onSubmit={handleSubmit} style={{ margin: '0 0 0 20px' }}>
        <input
          type="text"
          name="url"
          value={url}
          placeholder="GoogleMaps URL"
          onChange={handleResChange}
          required
        />
        <RestaurantSnackbar disabled={isDisabled} />
        <br />
        <h3> How to find proper GoogleMaps URL</h3>
        <ol>
          <li>Google Search the restaurant on a Desktop</li>
          <li>Click on the map preview on the right</li>
          <li>Copy and paste the URL into the field above</li>
        </ol>
        <p>
          The URL should look something like this:
          <br />
          "https://www.google.com/maps/place/
          <br />
          Nobu+Downtown/@40.7107732,-74.0095804,15z
          <br />
          /data=!4m5!3m4!1s0x0:0xd2962999c22f1521!
          <br />
          8m2!3d40.7107732!4d-74.0095804"
        </p>
      </form>
    </div>
  );
};

export default NewRestaurant;
