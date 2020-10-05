import ReactStars from "react-rating-stars-component";
import React from "react";

const RatingStars = () => {
  return (
    <ReactStars
      caption="Número de avaliações"
      count={5}
      size={20}
      color="white"
      activeColor="#5b074d"
      edit={false}
      value={3}
    />
  );
};

export default RatingStars;
