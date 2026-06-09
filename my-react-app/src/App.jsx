import "./App.css";
import { useEffect} from "react";

import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import gsap from "gsap";

function App() {

  useEffect(() =>{
    const tl = gsap.timeline();
    tl.add("start")

    tl.from(".nav", {
      y:-100,
      opacity:0,
      duration: 1
    })

    .from(".title", {
      y:100,
      opacity:0,
      duration:1
    }, "-=0.5")

    .from("btn", {
      scale:0,
      opacity:0,
      duration:0.5
    }, "start")

    gsap.from(".box", {
      y:100,
      opacity:0,
      duration:3,
      ScrollTrigger:".box"
    });
  }, []);

  return (
    <div>
      <div className="nav">Logo</div>

      <h1 className="title"> Modern GSAP website</h1>

      <button className="btn">Explore</button>

      <div className="box">
        box
      </div>
    </div>
  );
}

export default App;
