import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
const PostsPage = props => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  console.log(props)
  const handleSubmit = e => {
    e.preventDefault();
    fetch('/api/posts',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({city: e.target.city.value})
    }).then(response =>{
      if(response.ok){
        response.json().then(data=>{
          console.log(data)
          setPosts(data)
          //window.location.reload(false);
          //navigate('/posts', {replace: true})
        })
      }else{
        console.log('wrong location')
      }
    })
  };
  //console.log(posts)
  return (
    
    <section className="hero">
      <div class="container is-max-desktop" style={{marginTop: '3rem'}}>
        <form onSubmit={handleSubmit} >
         
          <label className="label" htmlFor="city">
            Enter the city you are interested
          </label>
          <input name = "city" className='input' />
          <div><input type="submit" className='button is-primary'/></div>
        </form>
        <Link to="/addPost" className="button is-primary is-large">
            Post a new house
          </Link>
      </div>``
      <div>
        <p>
          ~~~
        </p>
      </div>

          <div className="post-list" class="columns is-desktop" >
    {posts && posts.map(post => (
      <div key={post._id} class="column is-primary"style={{backgroundColor: '#4FFFB0'}} >
        <h2 className="title is-4">{post.user_name}</h2>
        <p><strong>Start date:</strong> {post.start_date}</p >
        <p><strong>End date:</strong> {post.end_date}</p >
        <p><strong>Price:</strong> {post.price}</p >
        <p><strong>Description:</strong> {post.description}</p >
        <p><strong>Email:</strong> {post.email}</p >
        <p><strong>City:</strong> {post.location.city}</p >
        <p><strong>State:</strong> {post.location.state}</p >
        <p><strong>Zip Code:</strong> {post.location.zipCode}</p >
      </div>
    ))}
  </div>

      
    </section>
  );
};

export default PostsPage;
