import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "./Post.css";

function Post(props) {
  return (
    <div className="card">
      <div className="post-logo">
        <img className="imgr" src={props.attributes.image_url} alt={props.attributes.name}/>
      </div>
      <div className="post-name">{props.attributes.name}</div>
      <div className="post-score">{props.attributes.avg_score}</div>
      <div className="post-link">
        <Link to={`/posts/${props.attributes.slug}`}>View Post</Link>
      </div>
    </div>
  );
}

export default Post;