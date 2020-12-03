import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Header from './Header'
import ReviewForm from './ReviewForm'
import Token from '../../services/token/Token'
// import ax from '../../services/token/Token'
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

    Token()
    // ax()
    
    const post_id = post.data.id
    axios.post('http://localhost:3000/api/v1/reviews', { review, post_id })
      .then(resp => {
        const included = [...post.included, resp.data]
        setPost({...post, included})
        setReview({title:'', description:'', score:0})
      })
    .catch(resp => {})
  }

  const setRating = (score, e) => {
    e.preventDefault()

    setReview({...review, score})
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
              setRating={setRating}
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