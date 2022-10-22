import { useState } from 'react';

const NewRestaurant = (props) => {
  const [form, setForm] = useState({
    name: '',
    latitude: '',
    longitude: '',
    website: '',
    cuisineType: '',
    tags: '',
  });

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddRestaurant(form);
  };

  return (
    <div>
      <h3> Add Restaurant </h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name-input">Name:</label>
        <input
          required
          type="text"
          name="name"
          id="name-input"
          value={form.name}
          placeholder="Restaurant Name"
          onChange={handleChange}
        />
        <label htmlFor="latitude-input">Latitude:</label>
        <input
          required
          type="text"
          name="latitude"
          id="latitude-input"
          value={form.latitude}
          placeholder="Latitude"
          onChange={handleChange}
        />
        <label htmlFor="longitude-input">Longitude:</label>
        <input
          required
          type="text"
          name="longitude"
          id="longitude-input"
          value={form.longitude}
          placeholder="Longitude"
          onChange={handleChange}
        />
        <label htmlFor="website-input">Website:</label>
        <input
          required
          type="text"
          name="website"
          id="website-input"
          value={form.website}
          placeholder="Website URL"
          onChange={handleChange}
        />
        <label htmlFor="cuisine-type-input">Cuisine Type:</label>
        <input
          required
          type="text"
          name="cuisineType"
          id="cuisine-type-input"
          value={form.cuisineType}
          placeholder="Cuisine Type"
          onChange={handleChange}
        />
        <label htmlFor="tags-input">Tags:</label>
        <input
          required
          type="text"
          name="tags"
          id="tags-input"
          value={form.tags}
          placeholder="Tag"
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewRestaurant;
