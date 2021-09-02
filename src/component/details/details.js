import React from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import Movie from "../../movie.json";

const Details = (props) => {
  const history = useHistory();
  const { id } = useParams();
  const data = Movie.find((d) => d.id == id);
  console.log(data);
  return (
    <div>
      <p>details,{id}</p>
      <div style={{ display: "flex" }}>
        <div>
          <img src={data.img.src} />
        </div>
        <div>
          <h1>{data.title}</h1>
          <p>{data.time}min</p>
          <p>{data.year}</p>
          {data.type.Action && (
            <p
              style={{
                backgroundColor: "red",
                color: "white",
                borderRadius: "5px",
                width: "3.5rem",
              }}
            >
              action{" "}
            </p>
          )}
          {data.type.Fantasy && (
            <p
              style={{
                backgroundColor: "green",
                color: "white",
                borderRadius: "5px",
                width: "3.5rem",
              }}
            >
              Fantasy{" "}
            </p>
          )}
          {data.type.crim && (
            <p
              style={{
                backgroundColor: "blue",
                color: "white",
                borderRadius: "5px",
                width: "3.5rem",
              }}
            >
              Crim{" "}
            </p>
          )}
        </div>
      </div>
      <button
        onClick={() => {
          history.goBack("/");
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default Details;
