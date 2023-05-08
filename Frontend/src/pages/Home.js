import React from "react";
import { Link } from "react-router-dom";

const Home = props => {

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
    fetch('/api/posts',{
      method:'GET',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({city: e.target.city.value})
    }).then(response =>{
      if(response.ok){
        console.log('got back ok response')
        window.location.reload(false);
      }else{
        console.log('sign up wrong')
      }
    })
  };
  return (

    <div>

    <>
      
      <section className="hero is-small">
        <div className="container hero-body">
          <p className="title">Welcome to RentEasy</p>
          <p className="subtitle">Please sign up first</p>
        </div>
      </section>
      <section className="hero is-small ">
        <div className="container hero-body">
          <Link to="/signup" className="button is-primary is-large">
            Sign Up
          </Link>
          <Link to="/login" className="button is-primary is-large">
            Sign in
          </Link>
        </div>
      </section>
    </>
    </div>
  );
};

export default Home;
