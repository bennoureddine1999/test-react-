import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";

import "./banque2.css";

const Banque2 = () => {
  const [solde, setSolde] = useState(100);
  const [inputvalue1, setInputvalue1] = useState("");
  const [inputvalue2, setInputvalue2] = useState("");
  const [inputvalue3, setInputvalue3] = useState("");
  useEffect(() => {
    toast.success("seccess");
  }, [solde]);
  const inputRef = useRef();

  return (
    <div>
      <input ref={inputRef} />
      <button
        onClick={() => {
          console.log(inputRef.current.value);
        }}
      >
        click
      </button>
      <h1 className="title">Bienvenue dans l'espace client de votre banque</h1>

      <div className="firstpart">
        <p>
          votre solde est :<span>{solde}</span>$
        </p>
      </div>
      <h1 className="h1 title">Nos services</h1>
      <div className="secondepart">
        <div className="first">
          <p>Recharge votre compte</p>
          <input
            type="text"
            onChange={(e) => {
              setInputvalue1(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setSolde(solde + +inputvalue1);
            }}
          >
            Recharger
          </button>
        </div>
        <div className="second">
          <p>Virement</p>
          <input
            type="text"
            onChange={(e) => {
              setInputvalue2(e.target.value);
            }}
          />
          <button
            onClick={() => {
              if (solde >= inputvalue2) {
                setSolde(solde - +inputvalue2);
              }
            }}
          >
            Recharger
          </button>
        </div>
        <div className="third">
          <p>Recharge téléphone</p>
          <input
            type="text"
            onChange={(e) => {
              setInputvalue3(e.target.value);
            }}
          />
          <button
            onClick={() => {
              if (solde >= inputvalue3) {
                setSolde(solde - +inputvalue3);
              }
            }}
          >
            Recharger
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banque2;
