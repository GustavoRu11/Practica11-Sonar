// Proyecto academico: Practica 11 (analisis estatico con SonarCloud).
// Contiene fallos a proposito. NO ejecutar ni desplegar.
const express = require('express');
const mysql = require('mysql2');
const { exec } = require('child_process');
const fs = require('fs');
const crypto = require('crypto');
const https = require('https');

const app = express();

// FALLO 1: credenciales escritas en el codigo
const DB_PASSWORD = 'root1234';
const API_TOKEN = 'token-secreto-de-ejemplo-123456';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root1234',
  database: 'tienda',
});

// FALLO 2: inyeccion SQL (consulta armada concatenando texto)
app.get('/usuario', (req, res) => {
  const id = req.query.id;
  db.query('SELECT * FROM usuarios WHERE id = ' + id, (err, rows) => {
    res.json(rows);
  });
});

// FALLO 3: XSS reflejado
app.get('/hola', (req, res) => {
  res.send('<h1>Hola ' + req.query.nombre + '</h1>');
});

// FALLO 4: inyeccion de comandos
app.get('/ping', (req, res) => {
  exec('ping -c 1 ' + req.query.host, (err, salida) => {
    res.send(salida);
  });
});

// FALLO 5: path traversal (lectura de archivos arbitrarios)
app.get('/archivo', (req, res) => {
  fs.readFile('./publico/' + req.query.nombre, 'utf8', (err, data) => {
    res.send(data);
  });
});

// FALLO 6: redireccion abierta
app.get('/ir', (req, res) => {
  res.redirect(req.query.url);
});

// FALLO 7: ejecucion de codigo con eval
app.get('/calcular', (req, res) => {
  res.send(String(eval(req.query.expr)));
});

// FALLO 8: no se verifica el certificado TLS
const agente = new https.Agent({ rejectUnauthorized: false });

// FALLO 9: hash debil (MD5) para contrasenas
function hashPassword(password) {
  return crypto.createHash('md5').update(password).digest('hex');
}

// FALLO 10: token predecible y cookie sin protecciones
app.get('/login', (req, res) => {
  const token = Math.random().toString(36).substring(2);
  res.cookie('sesion', token);
  res.send('ok');
});

// BUG: condicion con operandos identicos
function esAdmin(usuario) {
  if (usuario.rol === 'admin' || usuario.rol === 'admin') {
    return true;
  }
  return false;
}

// CODE SMELL: variable sin usar
const sinUsar = 42;

app.listen(3000);
