const { CheckGroup } = require('@checkly/cli/constructs');

const group = new CheckGroup('group-browser-flows', {
	name: 'Key API Transactions',
	activated: true,
	//   tags: ['api-group'],
	concurrency: 10,
	browserChecks: {
		testMatch: '*.spec.js',
	},
});

module.exports = {
	group,
};
