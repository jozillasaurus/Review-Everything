import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Post from './Post';
import "./Posts.css";

function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/posts')
      .then(resp => setPosts(resp.data.data))
      .catch(resp => console.log(resp))
  }, [posts.length])

  const grid = posts.map(item => {
    return (
      <Post
        key={item.attributes.name}
        attributes={item.attributes}
      />)
  })

  return (
    <Fragment>
      <div className="home">
      <div className="header">
        <h1>Review Everything</h1>
        <div className="subheader">Brutal and Honest Reviews.</div>
      </div>
      <div className="grid">
      {grid}
      </div>
    </div>
    </Fragment>
  );
}

export default Posts;