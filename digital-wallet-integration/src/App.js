// import samplePass from "./assets/image/sample-pass.png";
import walletButton from "./assets/image/wallet-button.png";
import "./App.css";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState('');
  const [googleWalletUrlToken, setGoogleWalletUrlToken] = useState('');

  const generate = () => {
    // fetch(`http://localhost:4000/create`, {
    fetch(`/.netlify/functions/google-wallet/google-wallet.js`, {
      method: "POST",
      body: `email=${email}`,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((res) => {
        return res.text();
      })
      .then((response) => {
        const json = JSON.parse(response);
        setGoogleWalletUrlToken(json.url);
      });
  }

  const handleChangeValue = (input) => {
    setEmail(input.target.value);
  }

  return (
    <div className="App">
      <div id="content">
        {/* <img id="pass" src={samplePass} alt="sample-pass" /> */}
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
          <input
            type="button"
            onClick={() => generate()}
            id="submit"
            value="Salvar"
          />
          {googleWalletUrlToken && (
            <a href={googleWalletUrlToken}>
              <img id="pass" src={walletButton} alt="wallet-button" />
            </a>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
