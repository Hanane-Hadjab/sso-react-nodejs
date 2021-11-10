import React from "react";
import PropTypes from "prop-types";
import "../../styles/css/style.css";

/**
 * ActionButton is a button who allows to do an action depending of his type (ex: submit) and his function OnClick..
 * @version 1
 * @since 7/10/2021
 */

const ActionButton = ({
  onClick,
  children,
  backgroundColor,
  type,
  marginTop,
  marginBottom,
  color,
  className,
}) => {
  return (
    <div className="d-flex justify-content-center">
      <button
        className={"action-button " + className}
        style={{
          backgroundColor: backgroundColor,
          marginTop: marginTop,
          marginBottom: marginBottom,
          color: color,
        }}
        type={type}
        onClick={onClick}
        disabled={false}
      >
        {children}
      </button>
    </div>
  );
};

ActionButton.propTypes = {
  /** Function used on button click */
  onClick: PropTypes.func,
  /** Text inside the button */
  children: PropTypes.any,
  /** Background color of the button */
  backgroundColor: PropTypes.string,
  /** Type of button (submit, button...) */
  type: PropTypes.string,
  /** Margin Top  */
  marginTop: PropTypes.string,
  /** Margin Bottom  */
  marginBottom: PropTypes.string,
  /** Text color inside the button */
  color: PropTypes.string,
  /** Other classname to add if necessary */
  className: PropTypes.string,
};

ActionButton.defaultProps = {
  backgroundColor: "#12957D",
  color: "white",
  children: "",
  type: "",
  marginTop: "",
  marginBottom: "",
  className: "",
};


export default ActionButton;
