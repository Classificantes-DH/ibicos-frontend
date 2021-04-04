import ReactStars from "react-rating-stars-component";
import PropTypes from "prop-types";
import React from "react";

const RatingStars = ({
  rate,
  isEditable,
  description,
  activeColor = "#5b074d",
  handleRatingChange,
}) => {
  return (
    <ReactStars
      caption={description}
      count={5}
      size={30}
      color="white"
      activeColor={activeColor}
      onChange={handleRatingChange}
      edit={isEditable}
      value={rate}
    />
  );
};

RatingStars.propTypes = {
  rate: PropTypes.number.isRequired,
  isEditable: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  activeColor: PropTypes.string.isRequired,
  handleRatingChange: PropTypes.func.isRequired,
};

export default RatingStars;
