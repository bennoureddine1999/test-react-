import React from "react";
import react, { useState } from "react";

import "./movie.css";

const MovieCard = (props) => {
  const [value, setvalue] = useState("");
  return (
    <>
      <div className="header">
        <div className="logo1">
          <img
            className="logo"
            src="imgbin-movie-logo-2FU4uzvZJebdAjtc7fsNEDGLg_t.jpg"
            alt="logo"
          />
          <p className="logoContent">MOvies stor</p>
        </div>
        <div className="recherchecontent">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              props.setMovie(
                props.movie.filter((movie) => {
                  const exp = new RegExp(value, "i");

                  if (value == "") {
                    return movie;
                  } else {
                    if (exp.test(movie.title)) {
                      return movie;
                    } else {
                      return;
                    }
                  }
                })
              );
            }}
          >
            <input
              type="text"
              className="recherch"
              placeholder="searche..."
              onChange={(e) => {
                setvalue(e.target.value);
              }}
            />
            <button className="button">
              <img className="buttoncherch" src="./icons8-chercher.gif" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
