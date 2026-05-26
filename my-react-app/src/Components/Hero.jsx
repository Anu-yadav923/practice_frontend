import "./Hero.css";

function Hero({name, role}) {
    return(
        <div className="hero">
            <h1>Hello, I'am {name}</h1>
            <p>{role}</p>
            <button>Hire Me</button>
            <button>Projects</button>
        </div>
    )
}

export default Hero;