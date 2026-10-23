// Proyecto academico (Practica 11). Fallos intencionales. NO ejecutar ni desplegar.
const express = require('express');
const router = express.Router();

router.get('/ficha-nombre', (req, res) => {
  res.send('<div class="ficha">' + req.query.nombre + '</div>');
});

router.get('/ficha-categoria', (req, res) => {
  res.send('<div class="ficha">' + req.query.categoria + '</div>');
});

router.get('/ficha-marca', (req, res) => {
  res.send('<div class="ficha">' + req.query.marca + '</div>');
});

router.get('/ficha-color', (req, res) => {
  res.send('<div class="ficha">' + req.query.color + '</div>');
});

router.get('/ficha-talla', (req, res) => {
  res.send('<div class="ficha">' + req.query.talla + '</div>');
});

router.get('/ficha-descripcion', (req, res) => {
  res.send('<div class="ficha">' + req.query.descripcion + '</div>');
});

router.get('/ficha-comentario', (req, res) => {
  res.send('<div class="ficha">' + req.query.comentario + '</div>');
});

router.get('/ficha-titulo', (req, res) => {
  res.send('<div class="ficha">' + req.query.titulo + '</div>');
});

router.get('/ficha-etiqueta', (req, res) => {
  res.send('<div class="ficha">' + req.query.etiqueta + '</div>');
});

router.get('/ficha-proveedor', (req, res) => {
  res.send('<div class="ficha">' + req.query.proveedor + '</div>');
});

module.exports = router;
