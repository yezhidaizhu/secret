require('dotenv').config();

const { exEncrypt, exDecrypt } = require('./encrypt/exEncrypt');

const d = require('./demoExData');
const data = JSON.stringify(d);

const enc = exEncrypt(data);
const denc = exDecrypt(enc);
console.log(enc);
console.log(denc);
console.log(JSON.parse(denc));
