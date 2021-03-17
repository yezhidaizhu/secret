const crypto = require('crypto');

const password = process.env.password;


const algorithm = 'aes-192-cbc';
const key = crypto.scryptSync(password, 'salt', 24);
const iv = Buffer.alloc(16, 'x');

function encrypt(data) {
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
