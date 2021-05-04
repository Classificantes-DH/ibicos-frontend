import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./NavItem.module.scss";

const NavItem = ({ imgData, label, onClickHandler, path }) => {
  return (
    <li>
      <div className={styles.navItem}>
        {imgData ? <img src={imgData.imgSrc} alt={imgData.alt} /> : null}
        <Link to={path} onClick={onClickHandler}>
          {label}
        </Link>
      </div>
    </li>
  );
};

export default NavItem;

NavItem.propTypes = {
  imgData: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    imgSrc: PropTypes.node.isRequired,
  }),
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

NavItem.defaultProps = {
  imgData: null,
};
