import React from 'react'
import PropTypes from 'prop-types'
import config from '../config'

export default class HTML extends React.Component {
  render () {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes} className="light">
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalytics.code}`}></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              // Global site tag (gtag.js) - Google Analytics
              window.dataLayer = window.dataLayer || [];
              function gtag (){
                dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', '${config.googleAnalytics.code}');

              (function() {
                window.__onThemeChange = function() {};
                function setTheme(newTheme) {
                  window.__theme = newTheme;
                  preferredTheme = newTheme;
                  document.body.className = newTheme;
                  window.__onThemeChange(newTheme);
                }

                var preferredTheme;
                try {
                  preferredTheme = localStorage.getItem('theme');
                } catch (err) { }

                window.__setPreferredTheme = function(newTheme) {
                  setTheme(newTheme);
                  try {
                    localStorage.setItem('theme', newTheme);
                  } catch (err) {}
                }

                var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
                darkQuery.addListener(function(e) {
                  window.__setPreferredTheme(e.matches ? 'dark' : 'light')
                });

                setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
              })();

              /*
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function () {
                  navigator.serviceWorker.register('/worker.js').then(function (registration) {
                    console.log('Worker registration successful', registration.scope);
                  }, function (err) {
                    console.log('Worker registration failed', err);
                  }).catch(function (err) {
                    console.log(err);
                  });
                });
              } else {
                console.log('Service Worker is not supported by browser.');
              }
              */
            `
            }}
          />
          {this.props.preBodyComponents}
          <div
            key={'body'}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
}
