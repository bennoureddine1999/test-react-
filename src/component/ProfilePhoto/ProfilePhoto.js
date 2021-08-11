import React from "react";
import Photo from "../../photo.jpg";
import "./ProfilePhoto.css";

const ProfilPhoto = () => {
  return (
    <>
      <div className="Photo1">
        <img style={{ width: "100%", borderRadius: 10 }} src={Photo} />
      </div>
    </>
  );
};
export default ProfilPhoto;
