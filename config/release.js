
/* jshint node:true */
var execSync = require('child_process').execSync;

module.exports = {
  publish: true,
  beforeCommit: function(project, versions) {
    // generate changelog
    runCommand('github_changelog_generator --future-release='+versions.next);
  }
};

function runCommand(command) {
  console.log('running: ' + command);
  var output = execSync(command, { encoding: 'utf8' });
  console.log(output);
}
