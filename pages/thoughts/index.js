import React from 'react';
import Thoughts from 'components/Thoughts';
import {isProperPage} from 'utils/helpers'

export default function ThoughtsIndex(props) {
  const pages = props.route.pages.filter(isProperPage);
  return <div>
    <Thoughts pages={pages}/>
  </div>
}