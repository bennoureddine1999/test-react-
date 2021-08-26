import { render } from "@testing-library/react";
import react, { Component } from "react";
import "./banque.css";

export default class Banque extends Component {
  state = {
    solde: 100,
    inputvalue1: "",
    inputvalue2: "",
    inputvalue3: "",
  };
  render() {
    return (
      <>
        <h1 className="title">
          Bienvenue dans l'espace client de votre banque
        </h1>

        <div className="firstpart">
          <p>
            votre solde est :<span>{this.state.solde}</span>$
          </p>
        </div>
        <h1 className="title">Nos services</h1>
        <div className="secondepart">
          <div className="first">
            <p>Recharge votre compte</p>
            <input
              type="text"
              onChange={(e) => {
                this.setState({
                  inputvalue1: e.target.value,
                });
              }}
            />
            <button
              onClick={() => {
                this.setState({
                  solde: this.state.solde + +this.state.inputvalue1,
                });
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
                this.setState({
                  inputvalue2: e.target.value,
                });
              }}
            />
            <button
              onClick={() => {
                if (this.state.solde > this.state.inputvalue2) {
                  this.setState({
                    solde: this.state.solde - +this.state.inputvalue2,
                  });
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
                if (this.state.solde > this.state.inputvalue3) {
                  this.setState({
                    solde: this.state.solde - +this.state.inputvalue3,
                  });
                }
              }}
            />
            <button
              onClick={() => {
                this.setState({
                  solde: this.state.solde - +this.state.inputvalue3,
                });
              }}
            >
              Recharger
            </button>
          </div>
        </div>
      </>
    );
  }
}
