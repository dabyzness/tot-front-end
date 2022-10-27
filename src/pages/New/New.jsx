import { useState } from "react";
import { Link, redirect } from "react-router-dom";

import SuccessSnackbar from "../../components/SuccessSnackbar";
import NewRestaurant from "../NewRestaurant/NewRestaurant";

const New = (props) => {
  const [form, setForm] = useState({
    url: "",
  });

  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = ({ target }) => {
    if (target.value) {
      setIsDisabled(false);
    }
    if (target.value === "") {
      setIsDisabled(true);
    }
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddTTReview(form);
    setForm({ url: "" });
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

          <SuccessSnackbar disabled={isDisabled} />
        </form>
      </div>
      <div className="form-container">
        <NewRestaurant handleAddRestaurant={props.handleAddRestaurant} disabled={isDisabled} handleChange={handleChange}/>
      </div>
    </>
  );
};

export default New;
