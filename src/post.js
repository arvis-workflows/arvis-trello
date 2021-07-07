'use strict';
const arvish = require('arvish');
const arvisNotifier = require('arvis-notifier');
const axios = require('axios');

const KEY = process.env.key;
const TOKEN = process.env.token;
const LIST = process.env.list;

arvisNotifier();

let apiCall =
	"https://api.trello.com/1/cards?name=" + arvish.input + "&pos=bottom&idList=" + LIST + "&key=" + KEY + "&token=" + TOKEN;

console.log(arvish.input);

axios.post(apiCall);

