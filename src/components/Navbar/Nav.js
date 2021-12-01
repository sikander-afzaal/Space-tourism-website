import React, { useState } from "react";
import Logo from "./Group 2.svg";
import hamburger from "./hamburger.svg";
import close from "./close.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";
import bg1 from "./Backgrounds/home.jpg";
import bg2 from "./Backgrounds/destination.jpg";
import bg3 from "./Backgrounds/crew.jpg";
import bg4 from "./Backgrounds/tech.jpg";
import smallBg1 from "./Backgrounds/small-home.png";
import smallBg2 from "./Backgrounds/small-dest.png";
import smallBg3 from "./Backgrounds/small-crew.png";
import smallBg4 from "./Backgrounds/small-tech.png";
function Nav() {
  const [icon, setIcon] = useState(hamburger);

  const logoHandler = () => {
    const active = document.querySelector(".active");
    active.classList.remove("active");
    document.querySelector(".first").target.classList.add("active");
  };
  //when clicking links-----------------------------------------------
  const clickHandler = (e) => {
    const active = document.querySelector(".active");
    active.classList.remove("active");
    e.target.classList.add("active");
    const app = document.querySelector(".app");
    const name = e.target.dataset.set;
    const mobile = window.innerWidth;
    switch (name) {
      case "home":
        if (mobile > 800) {
          app.style.backgroundImage = `url(${bg1})`;
        } else {
          app.style.backgroundImage = `url(${smallBg1})`;
        }
        break;
      case "destination":
        if (mobile > 800) {
          app.style.backgroundImage = `url(${bg2})`;
        } else {
          app.style.backgroundImage = `url(${smallBg2})`;
        }

        break;
      case "crew":
        if (mobile > 800) {
          app.style.backgroundImage = `url(${bg3})`;
        } else {
          app.style.backgroundImage = `url(${smallBg3})`;
        }
        break;
      case "tech":
        if (mobile > 800) {
          app.style.backgroundImage = `url(${bg4})`;
        } else {
          app.style.backgroundImage = `url(${smallBg4})`;
        }
        break;

      default:
        if (mobile > 800) {
          app.style.backgroundImage = `url(${bg1})`;
        } else {
          app.style.backgroundImage = `url(${smallBg1})`;
        }
        break;
    }
  };
  // hamburger icon
  const openHandler = () => {
    const navbar = document.querySelector(".navbar-ul");
    const items = document.querySelectorAll(".nav-items");
    navbar.classList.toggle("open");
    items.forEach((item) => {
      item.classList.toggle("open-item");
    });
    document.querySelector(".app").classList.toggle("overflow");
    if (navbar.classList.contains("open")) {
      setIcon(close);
    } else {
      setIcon(hamburger);
    }
  };

  return (
    <div className="navbar">
      <Link to="" onClick={logoHandler}>
        <img src={Logo} alt="" />
      </Link>
      <div className="line"></div>
      <ul className="navbar-ul">
        <Link
          data-set="home"
          to=""
          className="nav-items active first"
          onClick={clickHandler}
        >
          <span>00</span> Home
        </Link>
        <Link
          data-set="destination"
          to="Destination"
          className="nav-items"
          id="second"
          onClick={clickHandler}
        >
          <span>01</span> Destination
        </Link>
        <Link
          data-set="crew"
          to="Crew"
          className="nav-items"
          onClick={clickHandler}
        >
          <span>02</span> Crew
        </Link>
        <Link
          data-set="tech"
          to="Tech"
          className="nav-items"
          onClick={clickHandler}
        >
          <span>03</span> Technology
        </Link>
      </ul>
      <img className="mobile" src={icon} alt="" onClick={() => openHandler()} />
    </div>
  );
}

export default Nav;
