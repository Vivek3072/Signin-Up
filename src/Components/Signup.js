import laptop from "../laptop.png";
import "../App.css";
import React from "react";
// import ReactDOM from "react-dom";
import Header from "./Header";
import MyForm from "./MyForm";
// import "./Header.css";
import Footer from "./Footer";

const Signup = (props) => {
  return (
    <div className="formcontainer">
      <div className="navbar mb-0">
        <Header />
      </div>
      <div className="box">
        <MyForm
          userDetails="Username"
          personal="Password"
          github={true}
          linkedin={true}
        />

        <div className="photo" id="mypic">
          <img src={laptop} style={{ width: "290px" }} alt="loginphoto" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
