import React from "react";
import { useNavigate } from "react-router-dom";

/**
 *
 * CS-5356-TODO Login Page
 *
 * We're going to use a "mock" login system, so
 * all we need the user to provide is a username.
 *
 * Once they've filled in the username, they should
 * click Submit, at which point, we log the user in and
 * redirect them
 */
const AddPostPage = props => {
  const navigate = useNavigate();
 console.log(props)
  const handleSubmit = e => {
    e.preventDefault();
    /**
     * CS-5356-TODO
     *
     * Log the user in. Grab the value from the username input element
     * and send it in an object to POST /api/login
     *
     * When it responds with a 200 OK, call `props.onLogin()` to have App
     * update your sign-in status, and then call `navigate('/instructor-home')`
     * to go to the /instructor-home page
     */
    console.log(props)
    const url = '/api/post'
    fetch(url,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({start_date: e.target.start_date.value, end_date:e.target.end_date.value,price:e.target.price.value,description:e.target.description.value,email:e.target.email.value, location: {
        city: e.target.city.value
      } })
    }).then(response =>{
      if(response.ok){
        console.log('got back ok response')
        navigate('/posts', {replace: true});
      }else{
        console.log('addPost wrong')
      }
    })
  };
  return (
    <section className="hero">
      <div className="container hero-body">
        <h1 className="title">Finish the following information to post</h1>
        <form onSubmit={handleSubmit}>
          <label className="label" htmlFor="start_date">
            Start Date
          </label>
          <input name = "start_date" className='input' />

          {/* Add an input for the username */}
          <label className="label" htmlFor="end_date">
            End Date
          </label>
          <input name = "end_date" className='input' />
          <label className="label" htmlFor="price">
            Price
          </label>
          <input name = "price" className='input' />
          <label className="label" htmlFor="description">
            Some description about your house
          </label>
          <input name = "description" className='input' />
          <label className="label" htmlFor="email">
            Email
          </label>
          <input name = "email" className='input' />
          <label className="label" htmlFor="city">
            City
          </label>
          <input name = "city" className='input' />
          <div><input type="submit" className='button is-primary'/></div>
        </form>
      </div>
    </section>
  );
};

export default AddPostPage;
