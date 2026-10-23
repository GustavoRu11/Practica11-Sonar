// Proyecto academico (Practica 11). Fallos intencionales. NO ejecutar ni desplegar.
const express = require('express');
const { exec, execSync } = require('child_process');
const router = express.Router();

router.get('/ping', (req, res) => {
  exec('ping -c 1 ' + req.query.host, (err, salida) => res.send(salida));
});

router.get('/dns', (req, res) => {
  exec('nslookup ' + req.query.host, (err, salida) => res.send(salida));
});

router.get('/traza', (req, res) => {
  exec('traceroute ' + req.query.host, (err, salida) => res.send(salida));
});

router.get('/whois', (req, res) => {
  exec('whois ' + req.query.host, (err, salida) => res.send(salida));
});

router.get('/ver', (req, res) => {
  res.send(execSync('cat ' + req.query.ruta).toString());
});

router.get('/listar', (req, res) => {
  res.send(execSync('ls -la ' + req.query.ruta).toString());
});

module.exports = router;
