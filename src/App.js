import samplePass from "./assets/image/sample-pass.png";
import "./App.css";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState('');

  const generate = () => {
    fetch(`/create`, {
      method: "POST",
      body: `email=${email}`,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((res) => {
        return res.text();
      })
      .then((button) => {
        document.getElementById("button").innerHTML = button;
      });
  }

  const handleChangeValue = (input) => {
    setEmail(input.target.value);
  }

  return (
    <div className="App">
      <div id="content">
        <img id="pass" src={samplePass} alt="sample-pass" />
        <form id="form">
          <p>Enter your email address to generate a new pass: {email}</p>
          <input
            required
            type="email"
            id="email"
            value={email}
            onChange={(e) => handleChangeValue(e)}
            placeholder="Email"
          />
          <input type="button" onClick={() => generate()} id="submit" value="Salvar" />
        </form>
      </div>
    </div>
  );
}

export default App;
