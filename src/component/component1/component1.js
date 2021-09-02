import React from "react";
import { useHistory } from "react-router-dom";

const Component1 = () => {
  const history = useHistory();
  return (
    <div>
      <p>component1</p>
      <button
        onClick={() => {
          alert("you are redirected");
          history.push("/component3");
        }}
      >
        click
      </button>
    </div>
  );
};

export default Component1;
