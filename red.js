// Proyecto academico (Practica 11). Fallos intencionales. NO ejecutar ni desplegar.
const express = require('express');
const http = require('http');
const https = require('https');
const router = express.Router();

router.get('/proxy-http', (req, res) => {
  http.get(req.query.url, (r) => r.pipe(res));
});

router.get('/proxy-http2', (req, res) => {
  http.get(req.query.destino, (r) => r.pipe(res));
});

router.get('/proxy-https', (req, res) => {
  https.get(req.query.url, (r) => r.pipe(res));
});

router.get('/proxy-https2', (req, res) => {
  https.get(req.query.enlace, (r) => r.pipe(res));
});

router.get('/proxy-request', (req, res) => {
  http.request(req.query.servicio, (r) => r.pipe(res)).end();
});

router.get('/ir-url', (req, res) => {
  res.redirect(req.query.url);
});

router.get('/ir-siguiente', (req, res) => {
  res.redirect(req.query.siguiente);
});

router.get('/ir-retorno', (req, res) => {
  res.redirect(req.query.retorno);
});

router.get('/ir-destino', (req, res) => {
  res.redirect(req.query.destino);
});

router.get('/ir-volver', (req, res) => {
  res.redirect(req.query.volver);
});

module.exports = router;
