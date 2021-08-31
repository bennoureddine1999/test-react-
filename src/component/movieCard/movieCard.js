import React from "react";
import "./movieCard.css";

const Card = (props) => {
  return (
    <>
      <div className="moviecard">
        <img
          src={props.movie.img.src}
          alt={props.movie.img.alt}
          //   style={{ borderRadius: "6px" }}
        />
        <div className="firstclass">
          <h3>{props.movie.title}</h3>
        </div>
        <div className="secondclass">
          <p>{props.movie.year}</p>
          <p>{props.movie.time}min</p>
        </div>
        <div className="thirdclass">
          {props.movie.type.Action && (
            <p
              style={{
                backgroundColor: "red",
                color: "white",
                borderRadius: "5px",
              }}
            >
              action{" "}
            </p>
          )}
          {props.movie.type.Fantasy && (
            <p
              style={{
                backgroundColor: "green",
                color: "white",
                borderRadius: "5px",
              }}
            >
              Fantasy{" "}
            </p>
          )}
          {props.movie.type.crim && (
            <p
              style={{
                backgroundColor: "blue",
                color: "white",
                borderRadius: "5px",
              }}
            >
              Crim{" "}
            </p>
          )}
        </div>
        <div className="watchclass">
          <span>watch</span>

          <img className="playlogo" src="./images/icons8-lecture-16.png" />
        </div>
      </div>
    </>
  );
};
export default Card;
