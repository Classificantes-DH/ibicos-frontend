import React from "react";
import PropTypes from "prop-types";
import styles from "./Message.module.scss";

const Message = ({ message }) => (
  <div className={styles.messageContainer}>{message}</div>
);

export default Message;

Message.propTypes = {
  message: PropTypes.node.isRequired,
};
