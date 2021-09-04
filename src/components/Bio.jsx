import React from 'react'
import profilePic from '../assets/profile-pic.png'
import { BioStyled, ProfilePicStyled } from '../style/custom'
import SocialNetwork from './SocialNetwork'

class Bio extends React.Component {
  render () {
    return (
      <BioStyled translate="no">
        <ProfilePicStyled
          src={profilePic}
          alt={'Stanley'}
        />
        <div>
          Personal blog by{' '}
          <a href="https://github.com/stanleygomes">Stanley</a>.{' '}
          <div>Posts about technology.</div>
          <div>
            <SocialNetwork />
          </div>
        </div>
      </BioStyled>
    )
  }
}

export default Bio
