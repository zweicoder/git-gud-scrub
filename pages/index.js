import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/fp/sortBy'
import flow from "lodash/fp/flow";
import filter from "lodash/fp/filter";
import map from "lodash/fp/map";
import sample from "lodash/fp/sample";
import truncate from 'lodash/truncate';

import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import access from 'safe-access'
import { config } from 'config'
import include from 'underscore.string/include'
import Bio from 'components/Bio'
import styles from './styles.module.css';
// import { Card } from 'react-toolbox/lib/card'
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

class BlogIndex extends React.Component {
  render() {
    const pages = this.props.route.pages.filter(properPage);

    const ideas = flow(
      filter(pathIs('/ideas')),
      sortBy(page => access(page, 'data.date')),
      map((page)=> {
        const { title, desc} = page.data;

        // return (
        //   <div className={styles.card} key={page.path}>
        //     <span className={styles.cardTitle}><Link to={prefixLink(page.path)}> {title}</Link></span>
        //     <span className={styles.cardSubtitle}>{desc}</span>
        //   </div>
        // );

        return (
          <Card key={page.path}>THIS IS A TEST CARD AND IT'S NOT WORKING T_T</Card>)
      })
    )(pages);

    const projects = flow(
      filter(pathIs('/projects')),
      sortBy(page => access(page, 'data.date')),
      map((page)=> {
        const { title, desc} = page.data;

        return (
          <div className={styles.card} key={page.path}>
            <span className={styles.cardTitle}><Link to={prefixLink(page.path)}> {title}</Link></span>
            <span className={styles.cardSubtitle}>{desc}</span>
          </div>

        );
      })
    )(pages);

    const thoughts = flow(
      filter(pathIs('/thoughts')),
      sortBy(page => access(page, 'data.date')),
      map((page)=> {
        const { title, desc, body} = page.data;

        return (
          <div className={styles.card} key={page.path}>
            <span className={styles.cardTitle}><Link to={prefixLink(page.path)}> {title}</Link></span>
            <span className={styles.cardSubtitle}>{desc}</span>
            <p>{truncate(removeHtmlTags(body), {length: 200, omission:'[...]'})}</p>
          </div>

        );
      })
    )(pages);

    const quote = flow(
      filter(pathIs(('/quotes'))),
      sample, // randomly select a quote
      page => <div dangerouslySetInnerHTML={{ __html: page.data.body }}/>
    )(pages);

    // TODO use rhythm for margin

    return (
      <DocumentTitle title={config.blogTitle}>

        <div>
          <Bio />
          {quote}
          <h2> Ideas </h2>
          {ideas}

          <h2> Projects</h2>
          <ul>
            {projects}
          </ul>
          <h2> Thoughts </h2>
          <ul>
            {thoughts}
          </ul>
        </div>
      </DocumentTitle>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

function properPage(page) {
  // Check that it's a markdown file and not 404
  return access(page, 'file.ext') === 'md' && !include(page.path, '/404')
}

function pathIs(path) {
  return page => include(page.path, path)
}

function removeHtmlTags(s) {
  return s.replace(/<\/?[\w\d]+>/gm, '')
}

export default BlogIndex
