'use strict';
const arvish = require('arvish');

const input = arvish.input

arvish.output([{
	title: `Add task \"${input}\" to Trello`,
	subtitle: 'Today - GTD',
	arg: input
}])
