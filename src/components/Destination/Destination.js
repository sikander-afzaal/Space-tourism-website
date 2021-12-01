import React, { useState } from "react";
import "./destination.css";
import Moon from "./photos/Moon.png";
import Mars from "./photos/Mars.png";
import Europa from "./photos/Europa.png";
import Titan from "./photos/Titan.png";

const data = [
  {
    png: Moon,
    name: "MOON",
    desc: `See our planet as you’ve never seen it before. A perfect relaxing
     trip away to help regain perspective and come back refreshed. While
     you’re there, take in some history by visiting the Luna 2 and Apollo
     11 landing sites.`,
    distance: "384,400 km",
    time: "3 days",
  },
  {
    png: Mars,
    name: "MARS",
    desc: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`,
    distance: "225 MIL. km",
    time: "9 months",
  },
  {
    png: Europa,
    name: "EUROPA",
    desc: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
    distance: "628 MIL. km",
    time: "3 years",
  },
  {
    png: Titan,
    name: "TITAN",
    desc: `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
    distance: "1.6 BIL. km",
    time: "7 years",
  },
];

function Destination() {
  // states---------------------------
  const [png, setPng] = useState(Moon);
  const [name, setname] = useState(data[0].name);
  const [desc, setdesc] = useState(data[0].desc);
  const [distance, setdistance] = useState(data[0].distance);
  const [time, settime] = useState(data[0].time);
  //////////////////////////////////////
  const clickHandler = (e) => {
    const active = document.querySelector(".active-place");
    active.classList.remove("active-place");
    e.target.classList.add("active-place");
    console.log(e);
    ////////////////////////////////////////////
    //conditions--------------------
    const distance = document.querySelector(".distance");
    const p2 = document.querySelector(".p2");
    const p3 = document.querySelector(".p3");
    const img = document.querySelector(".planet");
    distance.classList.add("anim-down");
    p2.classList.add("anim-right");
    p3.classList.add("anim-right");
    img.classList.add("anim-left");
    data.forEach((filter) => {
      if (filter.name === e.target.innerText) {
        setPng(filter.png);
        setname(filter.name);
        setdesc(filter.desc);
        setdistance(filter.distance);
        settime(filter.time);
      }
    });

    setTimeout(() => {
      distance.classList.remove("anim-down");
      p2.classList.remove("anim-right");
      p3.classList.remove("anim-right");
      img.classList.remove("anim-left");
    }, 1500);
  };
  return (
    <div className="dest">
      <h1 className="dest__h1">
        <span>01</span>PICK YOUR DESTINATION
      </h1>
      <div className="dest__bottom">
        <div className="bottom__left">
          <img className="planet" src={png} alt="" />
        </div>
        <div className="bottom__right">
          <ul className="selection-dest">
            <li onClick={clickHandler} className="place active-place">
              Moon
            </li>
            <li onClick={clickHandler} className="place">
              Mars
            </li>
            <li onClick={clickHandler} className="place">
              Europa
            </li>
            <li onClick={clickHandler} className="place">
              Titan
            </li>
          </ul>
          <p className="p2">{name}</p>
          <p className="p3 width">{desc}</p>
          <div className="distance">
            <div className="average">
              <h3>AVG.DISTANCE</h3>
              <p>{distance}</p>
            </div>
            <div className="time">
              <h3>Est. travel time</h3>
              <p>{time}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
