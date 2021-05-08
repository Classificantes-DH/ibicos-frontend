import React from "react";
import PropTypes from "prop-types";
import styles from "./WorkingLocation.module.scss";
import mapIcon from "../../../../../resources/imgs/utilityIcons/map-location-pure.svg";

const WorkingLocation = ({ title, location }) => (
  <div className={styles.container}>
    <div className={styles.titleContainer}>
      <img src={mapIcon} alt="Map Location Icon" className={styles.icon} />
      <h4>{title}</h4>
    </div>
    <ul className={styles.locationList}>
      {location.map(({ specific, broad }) => (
        <li key={specific}>
          {specific} | {broad}
        </li>
      ))}
    </ul>
  </div>
);

export default WorkingLocation;

WorkingLocation.propTypes = {
  location: PropTypes.arrayOf(
    PropTypes.shape({
      specific: PropTypes.string.isRequired,
      broad: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};
