import { useState } from "react";

const NewRating = (props) => {
  const [form, setForm] = useState({
    rating: 3,
    comment:''
  });

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddRating(form);
  };

  const handleButton = (val) =>{
    setForm({...form,rating:val})
  }
  
  return ( 
    <>
      <div style={{display:"flex", flexDirection:"column",alignItems:"center"}}> 
        <h1>Rating for:</h1>
        <h1>Restaurant Name</h1>
        <br />
        <form onSubmit={handleSubmit}>
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
          <br />
          <br />
          <label htmlFor="comment-input">Comment:</label>
          <input
            required
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