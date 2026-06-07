import "./App.css";
import { useEffect } from "react";
import gsap from "gsap";

function App() {
  useEffect(() =>{
    gsap.from(".card",{
      y:100,
      opacity:0,
      duration:1,
      stagger:0.3
    })
  })

  return(
    <div className="container">
      <div className="card">card 2</div>
      <div className="card">card 3</div>
      <div className="card">card 1</div>
    </div>
  );
}

export default App;