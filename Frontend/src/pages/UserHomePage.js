import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserHomePage = (props) => {
  const navigate = useNavigate();
  console.log(props)
  const [infos,setInfos]= useState([])
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    console.log("Get the posts on home page");
    fetch(`/api/postsId`).then(response =>{
      if (response.ok){
        response.json().then(data=>{
          setPosts(data)
        })
      }
    })
    fetch('/api/user').then(response =>{
      if (response.ok){
        response.json().then(data=>{
          setInfos(data)
        })
      }
    })

  }, []);
  const handleClick = (id) => {
    fetch(`/api/${id.toString()}`,{
      method:'DELETE',
      headers:{
        'Content-Type': 'application/json'
      },
    }).then(response =>{
      console.log(response)
      if(response.ok){


          //window.location.reload(true);
          navigate('/posts', {replace: true})

      }else{
        console.log('sign up wrong')
      }
    })
  };

  return (
    <><div class="container">
    <div class="notification is-primary">
    <h2><strong>Username :</strong> {infos.user_name}</h2 >
        <p><strong>prefer to be called :</strong> {infos.nick_name}</p >
        <p><strong>About me :</strong> {infos.info}</p >
    </div>
  </div>
     <section className="hero">
      <div class="container is-max-desktop" style={{marginTop: '3rem'}}>
      </div>
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
        <button onClick={() => handleClick(post._id)}className="button"> Delete this post</button>
      </div>
    ))}
  </div>

      
    </section>
    </>
  );
};

export default UserHomePage;
