import React from 'react';

function ReviewForm(props) {
  return (
    <div className="wraps">
      <form onSubmit={props.handleSubmit}>
        <div>Have an experiance with {props.attributes.name}? Share your review.</div>
        <div className="field">
          <input onChange={props.handleChange} value={props.review.title} type="text" name="title" placeholder="Review Title"/>
        </div>
        <div className="field">
          <input onChange={props.handleChange} value={props.review.description} type="text" name="description" placeholder="Review Description"/>
        </div>
        <div className="field">
          <div className="rating-container">
            <div className="rating-title-text">Rate</div>
            [Star Rating goes here]
          </div>
        </div>
        <button type="submit">Submit Your Review</button>
      </form>
    </div>
  );
}

export default ReviewForm;