import react from "react";
import "./FullName.css";
import PropTypes from "prop-types";

const FullName = (props) => {
  return (
    <>
      <p className="Fullname">{props.fullname}</p>
    </>
  );
};
FullName.propTypes = {
  fullname: PropTypes.string,
};
export default FullName;
