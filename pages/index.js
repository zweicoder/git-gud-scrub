import React from 'react';
import flow from "lodash/fp/flow";
import filter from "lodash/fp/filter";
import sample from "lodash/fp/sample";
import includes from 'lodash/includes';
import { pathIs } from 'utils/helpers';

import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import access from 'safe-access'
import { config } from 'config'
import Bio from 'components/Bio'
import Ideas from 'components/Ideas';
import Thoughts from 'components/Thoughts';
import './styles.global.css'


class BlogIndex extends React.Component {
  render() {
    const pages = this.props.route.pages.filter(properPage);

    // const projects = flow(
    //   filter(pathIs('/projects')),
    //   sortBy(page => access(page, 'data.date')),
    //   map((page)=> {
    //     const { title, desc } = page.data;
    //
    //     return null;
    //   })
    // )(pages);

    const quote = flow(
      filter(pathIs(('/quotes'))),
      sample, // randomly select a quote
      page => <div dangerouslySetInnerHTML={{ __html: page.data.body }}/>
    )(pages);

    return (
      <DocumentTitle title={config.blogTitle}>

        <div>
          <Bio />
          {quote}
          <h2> Ideas </h2>
          <Ideas pages={pages}/>

          <h2> Projects</h2>
          <h2> Thoughts </h2>
          <Thoughts pages={pages}/>
        </div>
      </DocumentTitle>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
};

function properPage(page) {
  // Check that it's a markdown file and not 404
  return access(page, 'file.ext') === 'md' && !includes(page.path, '/404')
}

export default BlogIndex
