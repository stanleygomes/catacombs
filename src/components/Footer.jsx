import React from 'react'
import Typography from '../utils/typography'
import SocialNetwork from './SocialNetwork'

class Footer extends React.Component {
  render () {
    return (
      <footer
        style={{
          marginTop: Typography.rhythm(2.5),
          paddingTop: Typography.rhythm(1)
        }}
      >
        <div style={{ float: 'right' }}>
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            rss
          </a>
        </div>
        <SocialNetwork />
      </footer>
    )
  }
}

export default Footer
