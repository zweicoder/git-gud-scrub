import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'
import profilePic from './profile-pic.jpg'

function Bio(props) {
  return (
    <div
      style={{
        display:'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: rhythm(2.5),
        marginBottom: rhythm(0.5)
      }}
    >
      <img
        src={prefixLink(profilePic)}
        alt={`author ${config.authorName}`}
        style={{
          float: 'left',
          marginRight: rhythm(1 / 4),
          marginBottom: 0,
          width: rhythm(2),
          height: rhythm(2),
          borderRadius: '50%'
        }}
      />
      Written by&nbsp; <strong>{config.authorName}</strong>
    </div>
  )
}

export default Bio
