import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import dest from "./destination.jpg";

function home() {
  const clickHandler = () => {
    const active = document.querySelector(".active");
    active.classList.remove("active");
    document.querySelector("#second").classList.add("active");
    document.querySelector(".app").style.backgroundImage = `url(${dest})`;
  };
  return (
    <div className="home">
      <div className="home_text">
        <p className="p1">SO, YOU WANT TO TRAVEL TO</p>
        <p className="p2">SPACE</p>
        <p className="p3">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link
        style={{ textDecoration: "none" }}
        to="Destination"
        onClick={clickHandler}
      >
        {" "}
        <p className="explore">EXPLORE</p>{" "}
      </Link>
    </div>
  );
}

export default home;
