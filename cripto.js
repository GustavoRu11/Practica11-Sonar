// Proyecto academico (Practica 11). Fallos intencionales. NO ejecutar ni desplegar.
const crypto = require('crypto');
const https = require('https');
const tls = require('tls');

// Cifrado debil: DES
function cifrarDes(texto) {
  const c = crypto.createCipheriv('des', Buffer.from('12345678'), Buffer.from('87654321'));
  return c.update(texto, 'utf8', 'hex') + c.final('hex');
}

// Modo ECB
function cifrarEcb(texto) {
  const c = crypto.createCipheriv('aes-128-ecb', Buffer.from('1234567890123456'), null);
  return c.update(texto, 'utf8', 'hex') + c.final('hex');
}

// Clave RSA de 1024 bits
const claves = crypto.generateKeyPairSync('rsa', { modulusLength: 1024 });

// TLS sin verificar certificado
const agente = new https.Agent({ rejectUnauthorized: false });

const conexion = tls.connect({ host: 'localhost', port: 443, rejectUnauthorized: false });

// Hostname sin verificar
const conexion2 = tls.connect({ host: 'localhost', port: 443, checkServerIdentity: () => undefined });

// Protocolo TLS antiguo
const servidor = https.createServer({ minVersion: 'TLSv1' }, (req, res) => res.end('ok'));

// Hashes debiles
function hashMd5(t) { return crypto.createHash('md5').update(t).digest('hex'); }
function hashSha1(t) { return crypto.createHash('sha1').update(t).digest('hex'); }

// Token predecible
function token() { return Math.random().toString(36).substring(2); }

module.exports = { cifrarDes, cifrarEcb, claves, agente, conexion, conexion2, servidor, hashMd5, hashSha1, token };
