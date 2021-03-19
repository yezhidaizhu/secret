const crypto = require('crypto');

const password = process.env.password;
const iv = Buffer.alloc(16, 'qw');


const algorithm = 'aes-256-cbc';
const key = crypto.scryptSync(password, 'salt', 32);

function encrypt(data) {
  if (typeof data !== typeof "") {
    data = JSON.stringify(data);
  }
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

function decrypt(encrypted) {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}


module.exports = {
  encrypt,
  decrypt,
}
