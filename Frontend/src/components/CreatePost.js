const CreatePost = props => {
    const handleSubmit = event => {
      event.preventDefault();
      console.log("[CS5356] On handle create post");
      fetch(`/api/${props.user_name.toString()}/post`,{
        method: 'POST',
        headers: {
          'Content-Type' :'application/json'
        },
        body: JSON.stringify({name:event.target.name.value})
        //console.log(e.target.username.value)
      }).then(response =>{
        if(response.ok){
          console.log('create the post')
          props.onPostCreated()
        }else{
          //console.log(response)
          //console.log(event.target.name.value)
          console.log('fail to create post')
        }
      })
    };
  
    return (
      <>
        <div className="has-text-centered mb-5">
          <h1 className="title">Create a Class</h1>
        </div>
        <div
          style={{
            marginLeft: "25%",
            marginRight: "25%",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label" htmlFor="name">
                Post info
              </label>
              <div className="control">{/* Add an input for the name */}
              <input name ="name" className = "input" />
              </div>
            </div>
            <div className="field has-text-centered">
              <div className="control">
                {/* Add an input to submit the form */}
                <input type = "submit" className = "button is-primary" />
              </div>
            </div>
          </form>
        </div>
      </>
    );
  };
  export default CreatePost;
  