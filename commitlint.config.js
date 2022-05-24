const automaticCommitPattern = /^chore\(release\):.*\[skip ci]/;

module.exports = {
  extends: ['@commitlint/config-conventional'],

  ignores: [commitMsg => automaticCommitPattern.test(commitMsg)],
};
