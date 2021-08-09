import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
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
    <>
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
    </>
  );
}

export default App;
