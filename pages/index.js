import React from 'react';
import DocumentTitle from 'react-document-title'
import {Link} from 'react-router';
import { prefixLink } from 'gatsby-helpers'

import { config } from 'config'
import { rhythm } from 'utils/typography'
import { isProperPage } from 'utils/helpers';
import Bio from 'components/Bio'
import Quote from 'components/Quote'
import './styles.global.css'


class BlogIndex extends React.Component {
  render() {
    const pages = this.props.route.pages.filter(isProperPage);
    return (
      <DocumentTitle title={config.blogTitle}>
        <div>
          <Bio />
          <Quote pages={pages}/>
          <h2><Link to={prefixLink('/ideas/')}> Ideas</Link> </h2>

          <h2> Projects</h2>
          <h2> <Link to={prefixLink('thoughts/')}>Thoughts</Link> </h2>
        </div>
      </DocumentTitle>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
};

export default BlogIndex
