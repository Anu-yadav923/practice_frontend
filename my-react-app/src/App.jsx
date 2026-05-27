import {useState} from "react";

function App() {

  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("form submitted");
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter Email"
        onChange ={(e) => setEmail(e.target.value)} 
        />
        
        <br></br>
        <br></br>

        <input type="password" placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
        />

        <br></br>
        <br></br>

        <button type="submit">login</button>

      </form>
    </div>
  );
}

export default App;