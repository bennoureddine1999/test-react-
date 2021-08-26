import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Adress } from "./component/Adress/Adress";
import FullName from "./component/FullName/FullName";
import ProfilPhoto from "./component/ProfilePhoto/ProfilePhoto";
import photo from "./photo.jpg";

import Banque from "./component/banque/banque";
import Banque2 from "./component/banque2/banque2";
import Checkpoint from "./component/chekpoint states/checkpoint";

function App() {
  const Adress1 = " Algeria dar el beida bab ezouar";
  const fullname1 = " Ben aoumeur noureddine";
  const ProfilePhoto1 = photo;
  function imageclicke(e) {
    e.preventDefault();
    alert("profilephoto");
  }
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
    /*<>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Your name here</h1>

        <img src={logo} />
        <br />
        <img src="logo192.png" />
      </div>

      <video
        style={{ width: "320", height: "240" }}
        controls="controls"
        autoPlay="true"
      >
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </>*/

    <div style={{ paddingBottom: "3rem" }}>
      <div className="position">
        <Adress Adress={Adress1} />
      </div>

      <div className="position">
        <FullName fullname={fullname1} />
      </div>
      <div className="position">
        <ProfilPhoto imageclicke={imageclicke} ProfilPhoto={ProfilePhoto1} />
      </div>
      <div className="Banque">
        <Banque />
      </div>
      <div className="Banque">
        <Banque2 />
      </div>
      <div className="Checkpoint">
        <Checkpoint />
      </div>
    </div>
  );
}

export default App;
