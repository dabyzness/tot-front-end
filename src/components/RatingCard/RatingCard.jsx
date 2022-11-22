import { useState } from "react";
import styles from "./RatingCard.module.css";
import Loading from "../../pages/Loading/Loading";

const RatingCard = (props) => {
  const [dets, setDets] = useState(props.rating);

  const [isEdit, setIsEdit] = useState(false);

  let ratingText = "";

  if (props.rating.rating === 1) {
    ratingText = "Overrated";
  } else if (props.rating.rating === 3) {
    ratingText = "Liked";
  } else {
    ratingText = "Underrated";
  }

  const [form, setForm] = useState({
    rating: props.rating.rating,
    comment: props.rating.comment,
  });

  const handleButton = (val) => {
    setForm({ ...form, rating: val });
  };

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateRestaurant(props.restaurant._id, props.rating._id, form);
    setIsEdit(false);
  };

  const handleDelete = (ratingid) => {
    props.deleteRating(props.restaurant._id, ratingid);
  };

  let isUser = props.rating.author._id === props.user.profile;

  return (
    <div className={styles.card}>
      <div style={{ borderBottom: "1px solid #0d3b66" }}>
        <b>{props.rating.author.name}</b> - {ratingText}
      </div>
      <br />
      {isEdit ? (
        <div>
          <button
            style={{ margin: "0 5px 0 0" }}
            onClick={() => handleButton(1)}
          >
            Overhyped
          </button>
          <button onClick={() => handleButton(3)}>Like</button>
          <button
            style={{ margin: "0 0 0 5px" }}
            onClick={() => handleButton(5)}
          >
            Underrated
          </button>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              style={{ margin: "1em 0" }}
              autoComplete="off"
              type="text"
              name="comment"
              id="comment-input"
              value={form.comment}
              placeholder="Insert comments here"
              onChange={handleChange}
            />
            <div className={styles.buttonbox}>
              <button onClick={() => setIsEdit(false)}>Cancel</button>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      ) : (
        <>{props.rating.comment}</>
      )}
      {isUser && !isEdit && (
        <div className={styles.buttonbox}>
          <br />
          <button onClick={() => setIsEdit(true)}>Edit</button>
          <button onClick={() => handleDelete(props.rating._id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default RatingCard;
