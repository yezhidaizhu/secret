const crypto = require('crypto');

const password = process.env.expassword;

const algorithm = 'aes-192-cbc';
const key = crypto.scryptSync(password, 'salt', 24);
const iv = Buffer.alloc(16, 'x');

function exEncrypt(data) {
  if (typeof data !== typeof "") {
    data = JSON.stringify(data);
  }
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

function exDecrypt(encrypted) {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}


module.exports = {
  exEncrypt,
  exDecrypt,
}
