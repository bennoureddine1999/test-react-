import React from "react";
import "./ProfilePhoto.css";
import PropTypes from "prop-types";

const ProfilPhoto = (props) => {
  return (
    <>
      <div className="Photo1">
        <img
          onClick={props.imageclicke}
          style={{ width: "100%", borderRadius: 10 }}
          src={props.ProfilPhoto}
        />
      </div>
    </>
  );
};
ProfilPhoto.propTypes = {
  ProfilPhoto: PropTypes.string,
};
export default ProfilPhoto;
