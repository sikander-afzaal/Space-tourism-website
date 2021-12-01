import React, { useState } from "react";
import "./Crew.css";
import P1 from "./photos/P1.png";
import P2 from "./photos/P2.png";
import P3 from "./photos/P3.png";
import P4 from "./photos/P4.png";

const data = [
  {
    post: "Commander",
    name: "Douglas Hurley",
    desc: `Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the
          third time as commander of Crew Dragon Demo-2.`,
    img: P1,
  },
  {
    post: "Mission Specialist",
    name: "MARK SHUTTLEWORTH",
    desc: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.`,
    img: P2,
  },
  {
    post: "PILOT",
    name: "Victor Glover",
    desc: `Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. `,
    img: P3,
  },
  {
    post: "Flight Engineer",
    name: "Anousheh Ansari",
    desc: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. `,
    img: P4,
  },
];

function Crew() {
  const [png, setPng] = useState(P1);
  const [name, setname] = useState(data[0].name);
  const [desc, setdesc] = useState(data[0].desc);
  const [post, setpost] = useState(data[0].post);

  const clickHandler = (e) => {
    const active = document.querySelector(".active-page");
    active.classList.remove("active-page");
    e.target.classList.add("active-page");
    ////////////////////////////////////////////

    //animation----------------------------------
    const p1 = document.querySelector("#para1");
    const p2 = document.querySelector("#para2");
    const p3 = document.querySelector("#para3");
    const img = document.querySelector(".crew__right img");
    p1.classList.add("left-anim");
    p2.classList.add("left-anim");
    p3.classList.add("left-anim");
    img.classList.add("right-anim");
    //conditions--------------------
    let number = parseInt(e.target.dataset.number); //to get page number
    console.log(number);
    setPng(data[number].img);
    setname(data[number].name);
    setdesc(data[number].desc);
    setpost(data[number].post);
    //remove animation classes--------------------------------------
    setTimeout(() => {
      p1.classList.remove("left-anim");
      p2.classList.remove("left-anim");
      p3.classList.remove("left-anim");
      img.classList.remove("right-anim");
    }, 800);
  };

  return (
    <div className="crew">
      <h1 className="dest__h1 crew-h1">
        <span>02</span>MEET YOUR CREW
      </h1>
      <div className="crew__bottom">
        <div className="crew__left">
          <p id="para1">{post}</p>
          <p id="para2">{name}</p>
          <p id="para3">{desc}</p>
          <div className="circles">
            <div
              data-number="0"
              className="page active-page"
              onClick={clickHandler}
            ></div>
            <div data-number="1" className="page" onClick={clickHandler}></div>
            <div data-number="2" className="page" onClick={clickHandler}></div>
            <div data-number="3" className="page" onClick={clickHandler}></div>
          </div>
        </div>
        <div className="crew__right">
          <img src={png} alt="" />
        </div>
      </div>
      ;
    </div>
  );
}

export default Crew;
