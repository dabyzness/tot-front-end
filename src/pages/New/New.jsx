import { useState } from 'react';

import SuccessSnackbar from '../../components/SuccessSnackbar';
import NewRestaurant from '../../components/NewRestaurant/NewRestaurant';

const New = (props) => {
  const [form, setForm] = useState({
    url: '',
    rest: props.restaurants[0]._id,
  });

  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = ({ target }) => {
    if (target.value) {
      setIsDisabled(false);
    }
    if (target.value === '' || target.value === 'other') {
      setIsDisabled(true);
    }
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form)
    props.handleAddTTReview(form);
    setForm({ url: '', rest: props.restaurants[0]._id });
  };

  return (
    <>
      <h1>Add A TikTok or Restaurant</h1>
      <h3> Add TikTokReview </h3>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="url-input">URL:</label>
          <input
            required
            type="text"
            name="url"
            id="url-input"
            value={form.url}
            placeholder="TikTok URL"
            onChange={handleChange}
          />
          Restaurant:
          <br />
          <select
            required
            type="text"
            name="rest"
            value={form.rest}
            onChange={handleChange}
          >
            {props.restaurants.map((restaurant) => (
              <option key={restaurant._id} value={restaurant._id}>
                {restaurant.name}
              </option>
            ))}
            <option value="other">Not listed above...</option>
          </select>
          <br />
          <SuccessSnackbar disabled={isDisabled} />
        </form>
      </div>
      <br />
      <br />
      {form.rest === 'other' ? (
        <div className="form-container">
          <NewRestaurant
            handleAddRestaurant={props.handleAddRestaurant}
            disabled={isDisabled}
            handleChange={handleChange}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default New;
