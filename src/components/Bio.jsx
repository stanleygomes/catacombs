import React from 'react'
import profilePic from '../assets/profile-pic.jpg'
import Typography from '../utils/typography'
import SocialNetwork from './SocialNetwork'

class Bio extends React.Component {
  render () {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: Typography.rhythm(2)
        }}
        translate="no"
      >
        <img
          src={profilePic}
          alt={'Stanley'}
          style={{
            marginTop: Typography.rhythm(1 / 2),
            marginRight: Typography.rhythm(1 / 2),
            marginBottom: 0,
            width: Typography.rhythm(2),
            height: Typography.rhythm(2),
            borderRadius: '50%'
          }}
        />
        <p style={{ maxWidth: 310 }}>
          Personal blog by{' '}
          <a href="https://github.com/stanleygomes">Stanley</a>.{' '}
          News from the two suns planet.
          <div>
            <SocialNetwork />
          </div>
        </p>
      </div>
    )
  }
}

export default Bio
