import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import { Link } from 'react-router';

import flow from "lodash/fp/flow";
import filter from "lodash/fp/filter";
import map from "lodash/fp/map";
import truncate from 'lodash/truncate';
import { pathIs, sortByDateDesc, parseDate } from 'utils/helpers';
import { Card, CardTitle, CardText } from 'react-toolbox/lib/card';
import { rhythm } from 'utils/typography'

export default function Thoughts(props) {
  const thoughts = flow(
    filter(pathIs('/thoughts')),
    sortByDateDesc,
    map((page)=> {
      const { title, body, date } = page.data;
      return (
        <Card key={page.path}>
          <Link to={prefixLink(page.path)}><CardTitle title={title} subtitle={parseDate(date).calendar()}/></Link>
          <CardText>{truncate(removeHtmlTags(body), { length: 140, omission: '[...]' })}</CardText>
        </Card>
      );
    })
  )(props.pages);

  return (
    <div>
      {thoughts}
    </div>
  )
}

function removeHtmlTags(s) {
  return s.replace(/<\/?[\w\d]+>/gm, '')
}