const axios = require('axios');
const fs = require('fs');
const cheerio = require('cheerio');

const html = "<h1 class='title'>hello world</h1>";
let $ = cheerio.load(html);
let title = $('h1.title').html();
console.log(title);