import includes from 'lodash/includes';
import sortBy from 'lodash/fp/sortBy';
import reverse from 'lodash/fp/reverse';
import flow from "lodash/fp/flow";
import access from 'safe-access';
import moment from 'moment'

export function pathIs(path) {
  return page => includes(page.path, path)
}

export function sortByDateDesc(pages) {
  return flow(
    sortBy(page => moment(access(page, 'data.date'), 'DD-MM-YYYY').unix()),
    reverse
  )(pages)
}

export function parseDate(dateString){
  return moment(dateString,'DD-MM-YYYY HHmm');
}

export function isProperPage(page) {
  // Check that it's a markdown file and not 404
  return access(page, 'file.ext') === 'md' && !includes(page.path, '/404')
}