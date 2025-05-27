import React from 'react'
import profilePic from '../assets/profile-pic-v2.png'
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
          <div>My personal blog.</div>
          <div>
            <SocialNetwork />
          </div>
        </div>
      </BioStyled>
    )
  }
}

export default Bio
