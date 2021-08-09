import laptop from "./laptop.png";
import React, { useState } from "react";
import Header from "./Components/Header";
import MyForm from "./Components/MyForm";
import "./Components/Header.css";
import Footer from "./Components/Footer";
// import "./App.css";
// import ReactDOM from "react-dom";
// import Signup from "./Components/Signup";
// import { Link, Route, Switch } from "react-router-dom";

function App() {
  const [Login, setLogin] = useState(true);

  return (
    <div className="signinpage">
      <div className="formcontainer">
        <div className="navbar mb-0">
          <Header />
        </div>

        <div className="box">
          <MyForm
            userDetails="E-mail"
            personal="Password"
            personal="Password"
            github={!Login}
            linkedin={!Login}
            // style={{display: Login? "" : 'none'}}
          />

          <div className="photo" id="mypic">
            <img src={laptop} style={{ width: "290px" }} alt="photo" />
          </div>
        </div>

        {/* <button type="button" className="btn btn-outline-secondary" onClick={setLogin(!Login)} >SignUp</button>  */}

        <button
          type="button"
          style={{ display: Login ? "" : "none" }}
          className="btn btn-sm btn-outline-secondary"
          onClick={() => {
            setLogin(!Login);
          }}
        >
          SignUp
        </button>
        {/* <Switch> 
         <div className="newuser">
        <Route exact path="/Signup" component={Signup}  />
        <Route exact path="/"  />
         </Switch>
        <Link to='/Signup' className="btn btn-outline-secondary"  >SignUp</Link>
        

        </div>

        */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
