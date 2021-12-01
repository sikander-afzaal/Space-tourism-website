import React, { useState } from "react";
import "./tech.css";
import shuttle from "./photos/shuttle.png";
import shuttle2 from "./photos/shuttle2.png";
import shuttle3 from "./photos/shuttle3.png";
import smallShuttle1 from "./photos/small-shuttle.png";
import smallShuttle2 from "./photos/small-shuttle2.png";
import smallShuttle3 from "./photos/small-shuttle3.png";

const data = [
  {
    number: "1",
    name: "LAUNCH VEHICLE",
    desc: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
    img: shuttle,
    small: smallShuttle1,
  },
  {
    number: "2",
    name: "SPACEPORT",
    desc: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
    img: shuttle2,
    small: smallShuttle2,
  },
  {
    number: "3",
    name: "SPACE CAPSULE",
    desc: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
    img: shuttle3,
    small: smallShuttle3,
  },
];
function Technology() {
  const [png, setPng] = useState(() => {
    const mobile = window.innerWidth;
    if (mobile > 800) {
      return data[0].img;
    } else {
      return data[0].small;
    }
  });
  const [name, setname] = useState(data[0].name);
  const [desc, setdesc] = useState(data[0].desc);

  const clickHandler = (e) => {
    //animation----------------------------------
    const p1 = document.querySelector("#tech-p1");
    const p2 = document.querySelector("#tech-p2");
    const img = document.querySelector("#tech-img");
    p1.classList.add("opacity");
    p2.classList.add("opacity");
    img.classList.add("img-anim");
    //conditions-------------------------------------------------
    data.forEach((elem) => {
      if (elem.number === e.target.innerText) {
        setPng(() => {
          const mobile = window.innerWidth;
          if (mobile > 800) {
            return elem.img;
          } else {
            return elem.small;
          }
        });
        setname(elem.name);
        setdesc(elem.desc);
      }
    });
    const active = document.querySelector(".active-number");
    active.classList.remove("active-number");
    e.target.classList.add("active-number");

    //remove animation classes--------------------------------------
    setTimeout(() => {
      p1.classList.remove("opacity");
      p2.classList.remove("opacity");
      img.classList.remove("img-anim");
    }, 800);
  };

  return (
    <div className="tech">
      <h1 className="dest__h1 tech-h1">
        <span>03</span>SPACE LAUNCH 101
      </h1>
      <div className="tech__bottom">
        <div className="tech__left">
          <div className="pagination__tech">
            <p onClick={clickHandler} className="numbers active-number">
              1
            </p>
            <p onClick={clickHandler} className="numbers">
              2
            </p>
            <p onClick={clickHandler} className="numbers">
              3
            </p>
          </div>
          <div className="info__tech">
            <p>THE TERMINOLOGY…</p>
            <p id="tech-p1">{name}</p>
            <p id="tech-p2">{desc}</p>
          </div>
        </div>
        <div className="tech__right">
          <img id="tech-img" src={png} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Technology;
