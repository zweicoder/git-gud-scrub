import React from 'react'
import Ideas from 'components/Ideas'
import {isProperPage} from 'utils/helpers'

export default function IdeasIndex(props) {
  const pages = props.route.pages.filter(isProperPage);
  return <Ideas pages={pages}/>
}