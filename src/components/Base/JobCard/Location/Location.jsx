import React from "react";
import PropTypes from "prop-types";
import styles from "./Location.module.scss";
import WorkingLocation from "./WorkingLocation/WorkingLocation";

const Location = ({ cities }) => (
  <div className={styles.container}>
    <WorkingLocation
      title="Locais"
      location={cities.map(({ city_name: cityName, state_name: stateAbb }) => ({
        specific: cityName,
        broad: stateAbb,
      }))}
    />
    <WorkingLocation
      title="Região"
      location={cities.flatMap(
        ({ city_name: cityName, region_area: regionArea }) =>
          regionArea.map(({ area_name: areaName }) => ({
            specific: cityName,
            broad: areaName,
          }))
      )}
    />
  </div>
);

export default Location;

Location.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city_name: PropTypes.string.isRequired,
      state_name: PropTypes.string.isRequired,

      region_area: PropTypes.arrayOf(
        PropTypes.arrayOf(
          PropTypes.shape({
            area_name: PropTypes.string.isRequired,
          })
        )
      ),
    })
  ).isRequired,
};
