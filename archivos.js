// Proyecto academico (Practica 11). Fallos intencionales. NO ejecutar ni desplegar.
const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/leer-publico', (req, res) => {
  fs.readFile('./publico/' + req.query.nombre, 'utf8', (err, data) => res.send(data));
});

router.get('/leer-docs', (req, res) => {
  fs.readFile('./docs/' + req.query.nombre, 'utf8', (err, data) => res.send(data));
});

router.get('/leer-reportes', (req, res) => {
  fs.readFile('./reportes/' + req.query.nombre, 'utf8', (err, data) => res.send(data));
});

router.get('/descargar', (req, res) => {
  fs.createReadStream('./descargas/' + req.query.archivo).pipe(res);
});

router.get('/borrar', (req, res) => {
  fs.unlink('./temporal/' + req.query.archivo, () => res.send('ok'));
});

router.get('/guardar', (req, res) => {
  fs.writeFile('./subidas/' + req.query.nombre, req.query.contenido, () => res.send('ok'));
});

router.get('/anexar', (req, res) => {
  fs.appendFile('./bitacoras/' + req.query.nombre, req.query.linea, () => res.send('ok'));
});

router.get('/pagina', (req, res) => {
  res.sendFile('./vistas/' + req.query.pagina);
});

module.exports = router;
