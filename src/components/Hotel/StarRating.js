import React from 'react';
import StarRatingComponent from "react-star-rating-component";


const StarRating = ({rating}) => {
  return (
    <StarRatingComponent
      name="rate1"
      starCount={5}
      value={rating}
      className="rating"
    />   
  );
};

export default StarRating;