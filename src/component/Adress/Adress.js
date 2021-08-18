import react from "react";
import "./Adress.css";
import PropTypes from "prop-types";

export const Adress = (props) => {
  return (
    <div className="adress">
      <h1 className="text">{props.Adress}</h1>
    </div>
  );
};
Adress.propTypes = {
  Adress: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
