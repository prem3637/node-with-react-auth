import React from "react";
// import ReactStars from "react-stars";
import ReactStars from "react-rating-stars-component";
export default function Star() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div>
        hii
        <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
    value={0}
  />
    </div>
  );
}
