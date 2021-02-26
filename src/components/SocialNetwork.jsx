import React from 'react'

const SocialNetwork = (props) => {
  const comp = (
    <React.Fragment>
      <span translate="no">
        Find me on
      </span>
      {' '}
      <a
        href="https://www.linkedin.com/in/stanley-gomes"
        target="_blank"
        rel="noopener noreferrer"
      >
        linkedin
      </a>
      {' '}
      &bull;
      {' '}
      <a
        href="https://github.com/stanleygomes"
        target="_blank"
        rel="noopener noreferrer"
      >
        github
      </a>
      {' '}
      &bull;
      {' '}
      <a
        href="https://instagram.com/stanley.gomes"
        target="_blank"
        rel="noopener noreferrer"
      >
        instagram
      </a>
    </React.Fragment>
  )

  return comp
}

export default SocialNetwork
