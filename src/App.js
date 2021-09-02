import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Adress } from "./component/Adress/Adress";
import FullName from "./component/FullName/FullName";
import ProfilPhoto from "./component/ProfilePhoto/ProfilePhoto";
import photo from "./photo.jpg";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Component1 from "./component/component1/component1";
import Component2 from "./component/component2/component2";
import Component3 from "./component/component3/component3";

import Banque from "./component/banque/banque";
import Banque2 from "./component/banque2/banque2";
import Checkpoint from "./component/chekpoint states/checkpoint";
import MovieCard from "./component/movie/movie";
import Movie from "./movie.json";
import Card from "./component/movieCard/movieCard";
import Details from "./component/details/details";

import { Component, useState } from "react";

function App() {
  // const Adress1 = " Algeria dar el beida bab ezouar";
  // const fullname1 = " Ben aoumeur noureddine";
  // const ProfilePhoto1 = photo;
  // function imageclicke(e) {
  //   e.preventDefault();
  //   alert("profilephoto");
  // }

  const [movie, setMovie] = useState(Movie);
  return (
    //   <div className="App ">
    //     <div class="row with">
    //       <div class="col">
    //         <label>first name</label>
    //         <input
    //           type="text"
    //           class="form-control"
    //           placeholder="First name"
    //           aria-label="First name"
    //         />
    //       </div>
    //       <div class="col">
    //         <p className="">last name</p>
    //         <input
    //           type="text"
    //           class="form-control"
    //           placeholder="Last name"
    //           aria-label="Last name"
    //         />
    //       </div>
    //     </div>
    //     <form className="with">
    //       <div class="mb-3">
    //         <label for="exampleInputEmail1" class="form-label">
    //           Email address
    //         </label>
    //         <input
    //           type="email"
    //           class="form-control"
    //           id="exampleInputEmail1"
    //           aria-describedby="emailHelp"
    //         />
    //         <div id="emailHelp" class="form-text">
    //           We'll never share your email with anyone else.
    //         </div>
    //       </div>
    //       <div class="mb-3">
    //         <label for="exampleInputPassword1" class="form-label">
    //           Password
    //         </label>
    //         <input
    //           type="password"
    //           class="form-control"
    //           id="exampleInputPassword1"
    //         />
    //       </div>
    //       <div class="mb-3 form-check">
    //         <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    //         <label class="form-check-label" for="exampleCheck1">
    //           Check me out{" "}
    //         </label>
    //       </div>
    //       <button type="submit" class="btn btn-primary">
    //         Submit
    //       </button>
    //     </form>
    // </div>
    // <>
    //   <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
    //     <h1 className="title red">Your name here</h1>

    //     <img src={logo} />
    //     <br />
    //     <img src="logo192.png" />
    //   </div>

    //   <video
    //     style={{ width: "320", height: "240" }}
    //     controls="controls"
    //     autoPlay="true"
    //   >
    //     <source src="myVideo.mp4" type="video/mp4" />
    //   </video>
    // </>

    // <div style={{ paddingBottom: "3rem" }}>
    //  <div className="position">
    //   <Adress Adress={Adress1} />
    // </div>

    // <div className="position">
    //   <FullName fullname={fullname1} />
    // </div>
    // <div className="position">
    //   <ProfilPhoto imageclicke={imageclicke} ProfilPhoto={ProfilePhoto1} />
    // </div>
    // <div className="Banque">
    //   <Banque />
    // </div>
    // <div className="Banque">
    //   <Banque2 />
    // </div>
    // <div className="Checkpoint">
    //   <Checkpoint />
    // </div>
    <Router>
      <Switch>
        <Route exact path="/">
          <MovieCard movie={Movie} setMovie={setMovie} />

          <div className="moviecardcomponent">
            {movie.map((movie1) => (
              <Card key={movie1.id} movie={movie1} />
            ))}
          </div>
        </Route>
        <Route exact path="/Details/:id">
          <Details />
        </Route>
      </Switch>
    </Router>
    /*   </div>
    <Router>
      <ul>
        <li>
          <Link to="/">ci</Link>
        </li>
        <li>
          <Link to="/component2">ci</Link>
        </li>
        <li>
          <Link to="/component3">ci</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Component1 />
        </Route>
        <Route exact path="/component2" component={Component2} />
        <Route exact path="/component3">
          <Component3 />
        </Route>
      </Switch>
    </Router>*/
  );
}

export default App;
