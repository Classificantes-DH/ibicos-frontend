import ReactStars from "react-rating-stars-component";
import React from "react";

const RatingStars = () => {
  return (
    <ReactStars
      caption="Número de avaliações"
      count={5}
<<<<<<< HEAD
      size={30}
=======
      size={20}
>>>>>>> 291433b146fb23b2f7c47e17006702d27a6ed219
      color="white"
      activeColor="#5b074d"
      edit={false}
      value={3}
    />
  );
};

export default RatingStars;
