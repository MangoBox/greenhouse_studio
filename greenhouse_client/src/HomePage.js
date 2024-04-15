import React from "react";
import "./HomePage.css";

const landingtext =
  "Welcome Back User 1. Your plant is are online. Please visit the Monitor page to view the data and go to the control panal to change any functions of the greenhouse. If ypu have any questions please send email to thisisnotascam@gmail.com"
  function HomePage() {
    return (
    <div className="homeWrapper">
      <div className="homeContainer">
        <div className="homeLeft">
          <img src={require("./HomePage.jpg")} alt=""></img>
        </div>
        <div className="homeRight">
          <div className="homeTitle">
            Automated<br />Greenhouse 
          </div>
          <div className="homeText">{landingtext}</div>
          </div>
      </div>
    </div>
  );
}
export default HomePage;