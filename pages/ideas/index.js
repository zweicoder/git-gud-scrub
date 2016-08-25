import React from 'react'
import Ideas from 'components/Ideas'
import access from 'safe-access'

export default function IdeasIndex(props) {
  return <Ideas pages={access(props, 'route.pages')}/>
}