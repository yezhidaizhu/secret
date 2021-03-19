require('dotenv').config();

const { exEncrypt, exDecrypt } = require('./encrypt/exEncrypt');
const { encrypt, decrypt } = require('./encrypt/passEncrypt');

const d = require('./demoExData');

const enc = encrypt(d);
console.log(enc);

// const denc = decrypt(enc);
// console.log(denc);
// console.log(JSON.parse(denc));

// d?.map(item => {
//   const { pass } = item;
//   console.log(decrypt(pass));
// })
