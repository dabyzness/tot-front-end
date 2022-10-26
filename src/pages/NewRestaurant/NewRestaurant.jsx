import { useState } from "react";

const NewRestaurant = (props) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddRestaurant(url);
  };

  return (
    <div>
      <h3> Add Restaurant </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewRestaurant;
