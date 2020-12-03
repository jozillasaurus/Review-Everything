import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Header from './Header'
import ReviewForm from './ReviewForm'
import "./Post.css"

function Post(props) {
  const [post, setPost] = useState({})
  const [review, setReview] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const slug = props.match.params.slug
    const url = `http://localhost:3000/api/v1/posts/${slug}`

    axios.get(url)
      .then(resp => {
        setPost(resp.data)
        setLoaded(true)
      })
    .catch(resp => console.log(resp))
  }, [])

  const handleChange = (e) => {
    e.preventDefault()

    setReview(Object.assign({}, review, {[e.target.name]: e.target.value }))
    
    console.log('review:', review)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    const post_id = post.data.id
    axios.post('http://localhost:3000/api/v1/reviews', { review, post_id })
    .then(resp => {
      debugger
    })
    .catch(resp => {})
  }

  return (
    <div className="wrapper">
      {
        loaded &&
          <Fragment>
              <div className="column">
                <div className="main">
                <Header
                attributes={post.data.attributes}
                reviews={post.included}
                />
                <div className="reviews"></div>
              </div>
              </div>
            <div className="column-next">
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              attributes={post.data.attributes}
              review={review}
            />
        </div>
      </Fragment>
      }
    </div>
  );
}

export default Post;