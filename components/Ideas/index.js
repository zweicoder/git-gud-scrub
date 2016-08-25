import React from 'react';
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router';

import flow from "lodash/fp/flow";
import filter from "lodash/fp/filter";
import map from "lodash/fp/map";
import { pathIs, sortByDateDesc } from 'utils/helpers';
import { CardTitle } from 'react-toolbox/lib/card';
import { rhythm} from 'utils/typography';
import AnimatedCard from 'components/AnimatedCard';

export default function Ideas(props) {
  const ideas = flow(
    filter(pathIs('/ideas/posts')),
    sortByDateDesc,
    map((page)=> {
      const { title, desc } = page.data;
      return (
        <AnimatedCard key={page.path} style={{marginBottom: rhythm(1)}}>
          <Link to={prefixLink(page.path)}> <CardTitle  title={title} subtitle={desc}/></Link>
        </AnimatedCard>
      )
    })
  )(props.pages);

  return <div>
    {ideas}
  </div>;
}
