// Proyecto academico (Practica 11). Fallos intencionales. NO ejecutar ni desplegar.
const express = require('express');
const vm = require('vm');
const router = express.Router();

router.get('/calc1', (req, res) => {
  res.send(String(eval(req.query.expr)));
});

router.get('/calc2', (req, res) => {
  res.send(String(eval('(' + req.query.formula + ')')));
});

router.get('/funcion', (req, res) => {
  const f = new Function('x', req.query.cuerpo);
  res.send(String(f(1)));
});

router.get('/sandbox', (req, res) => {
  res.send(String(vm.runInNewContext(req.query.codigo, {})));
});

router.get('/mensaje', (req, res) => {
  res.send('<p>' + req.query.mensaje + '</p>');
});

router.get('/aviso', (req, res) => {
  res.send('<p>' + req.query.aviso + '</p>');
});

router.get('/alerta', (req, res) => {
  res.send('<p>' + req.query.alerta + '</p>');
});

router.get('/panel', (req, res) => {
  res.send('<p>' + req.query.panel + '</p>');
});

module.exports = router;
