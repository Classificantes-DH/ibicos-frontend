import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./NavItem.module.scss";

const NavItem = ({ imgData, label, onClickHandler, path }) => {
  const { alt, imgSrc } = imgData;
  return (
    <li>
      <div className={styles.navItem}>
        <img src={imgSrc} alt={alt} />
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
  }).isRequired,
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};
