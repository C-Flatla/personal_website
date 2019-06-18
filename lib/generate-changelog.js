/*jshint esversion: 6 */

const releaseNotes = require('git-release-notes');

const OPTIONS = {
  branch: 'master',
};
const RANGE = 'HEAD~5..HEAD';
const TEMPLATE = 'html-bootstrap';

releaseNotes(OPTIONS, RANGE, TEMPLATE)
.then((changelog) => {
  console.log(changelog);
})
.catch((ex) => {
  console.error(ex);
  process.exit(1);
});
