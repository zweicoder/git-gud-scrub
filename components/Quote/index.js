import React from 'react';

import flow from "lodash/fp/flow";
import filter from "lodash/fp/filter";
import sample from 'lodash/fp/sample';
import { pathIs, sortByDateDesc } from 'utils/helpers';

export default function Quote(props) {
  const quote = flow(
    filter(pathIs(('/quotes'))),
    sample, // randomly select a quote
    page => <div dangerouslySetInnerHTML={{ __html: page.data.body }}/>
  )(props.pages);
  return <div>{quote}</div>
}