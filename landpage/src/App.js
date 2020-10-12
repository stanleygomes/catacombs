import React from 'react';

import appScreen from './assets/image/app-screen.png';
import btnDownload from './assets/image/btn-download.png';
import logo from './assets/image/logo.png';

import './assets/style/global.css';
import './assets/style/bootstrap.css';

// const App = () => {
//   window.location.href = 'http://instagram.com/bibliasagrada.app.br';
//   return null;
// };

const App = () => {
  return (
    <div>
      <div class="full-width text-center main">
        <div class="full-width home">
          <img src={logo} class="logo" />
          <div class="container">
            <div class="col-sm-10 col-sm-offset-1">
              <div class="col-sm-6">
                <div class="full-width app-screens">
                  <img src={appScreen} class="app" />
                </div>
              </div>
              <div class="col-sm-6 xs-text-center text-left">
                <h1 class="title">Baixe agora</h1>
                <h3>e leia a bíblia em várias versões.</h3>
                <a href="https://play.google.com/store/apps/details?id=com.stanley.theholybible" target="_blank">
                  <img src={btnDownload} class="btn-download" id="gotoapp" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="full-width text-center footer">
        <div class="container">
          <div class="full-width signature">
            <div class="col-sm-12 xs-text-center">
              <div class="full-width copy">&reg; 2020 <strong>Bíblia Sagrada App.</strong></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App;
