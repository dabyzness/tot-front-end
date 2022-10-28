import { useState } from "react";
import { useLocation } from "react-router-dom";

const NewRating = (props) => {
  const location = useLocation()
  const restaurant = location.state

  const [form, setForm] = useState({
    rating: 3,
    comment:''
  });

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddRating(restaurant._id,form);
  };

  const handleButton = (val) =>{
    setForm({...form,rating:val})
  }
  
  return ( 
    <>
      <div style={{display:"flex", flexDirection:"column",alignItems:"center"}}> 
        <h1>Review for:</h1>
        <h1>{restaurant.name}</h1>
        <br />
        <div>
          <button 
            style={{margin:"0 5px 0 0"}}
            onClick={() => handleButton(1)}>
              Overhyped
            </button>
            <button
              onClick={() => handleButton(3)}>
              Like
            </button>
          <button 
            style={{margin:"0 0 0 5px"}}
            onClick={() => handleButton(5)}>
              Underrated
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <br />
          <br />
          <label htmlFor="comment-input">Comment:</label>
          <input
            autoComplete="off"
            type="text"
            name="comment"
            id="comment-input"
            value={form.comment}
            placeholder="Insert comments here"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default NewRating;