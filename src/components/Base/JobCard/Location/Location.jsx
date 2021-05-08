import React from "react";
import PropTypes from "prop-types";
import mapIcon from "../../../../resources/imgs/utilityIcons/map-location-pure.svg";
import styles from "./Location.module.scss";

const Location = ({ cities }) => (
  <div className={styles.location}>
    <div className={styles.locationSpecific}>
      <div className={styles.locationSpecificRegion}>
        <img src={mapIcon} alt="Map Location Icon" className={styles.icon} />
        <h4>Locais</h4>
      </div>
      <ul className={styles.locationList}>
        {cities.map(({ city_name: cityName, state_name: stateAbb }) => (
          <li key={cityName}>
            {cityName} | {stateAbb}
          </li>
        ))}
      </ul>
    </div>
    <div className={styles.locationSpecific}>
      <div className={styles.locationSpecificRegion}>
        <img src={mapIcon} alt="Map Location Icon" className={styles.icon} />
        <h4>Região</h4>
      </div>
      <ul className={styles.locationList}>
        {cities.map(({ city_name: cityName, region_area: regionArea }) =>
          regionArea.map(({ area_name: areaName }) => (
            <li key={areaName}>
              {areaName} | {cityName}
            </li>
          ))
        )}
      </ul>
    </div>
  </div>
);

export default Location;

Location.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city_name: PropTypes.string.isRequired,
      state_name: PropTypes.string.isRequired,
      idy: PropTypes.number,
      region_area: PropTypes.arrayOf(
        PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number,
            area_name: PropTypes.string.isRequired,
          })
        )
      ),
    })
  ).isRequired,
};
