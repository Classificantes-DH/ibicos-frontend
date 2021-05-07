import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./NavItem.module.scss";

const NavItem = ({ imgData, linkData, children }) => {
  return (
    <li>
      <div className={styles.navItem}>
        {imgData ? <img src={imgData.imgSrc} alt={imgData.alt} /> : null}

        {linkData ? (
          <Link to={linkData.path} onClick={linkData.onClickHandler}>
            {linkData.label}
          </Link>
        ) : null}
        {children}
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
  linkData: PropTypes.shape({
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func.isRequired,
  }),
  children: PropTypes.node,
};

NavItem.defaultProps = {
  imgData: null,
  linkData: null,
  children: null,
};
