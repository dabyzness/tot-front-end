import { useState } from "react";
import { Link, redirect } from "react-router-dom";

import SimpleSnackbar from "../../components/SuccessSnackbar";


const New = (props) => {
  
  const [form, setForm] = useState({
    url:''
  })
  
  const [isDisabled, setIsDisabled] = useState(true)

  const handleChange = ({target}) => {
    if (target.value ) {setIsDisabled(false)}
    if (target.value === "" ) {setIsDisabled(true)}
    setForm({...form, [target.name]: target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddTTReview(form)
    setForm({url:''})
  }

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
          placeholder="TikTok video url"
          onChange={handleChange}
        />

          <SimpleSnackbar handleChange={handleChange} disabled={isDisabled}/> 

      </form>
      </div>
      <Link to="/restaurants/new">
        <h3>Add New Restaurant</h3>
      </Link>
    </>
  );
}

export default New;