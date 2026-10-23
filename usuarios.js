// Proyecto academico (Practica 11). Fallos intencionales. NO ejecutar ni desplegar.
const express = require('express');
const mysql = require('mysql2');
const db = mysql.createConnection({ host: 'localhost', user: 'root', database: 'tienda' });
const router = express.Router();

router.get('/buscar-usuarios', (req, res) => {
  const filtro = req.query.filtro;
  db.query("SELECT * FROM usuarios WHERE nombre = '" + filtro + "'", (err, filas) => {
    res.json(filas);
  });
});

router.get('/buscar-clientes', (req, res) => {
  const filtro = req.query.filtro;
  db.query("SELECT * FROM clientes WHERE nombre = '" + filtro + "'", (err, filas) => {
    res.json(filas);
  });
});

router.get('/buscar-empleados', (req, res) => {
  const filtro = req.query.filtro;
  db.query("SELECT * FROM empleados WHERE nombre = '" + filtro + "'", (err, filas) => {
    res.json(filas);
  });
});

router.get('/buscar-pedidos', (req, res) => {
  const filtro = req.query.filtro;
  db.query("SELECT * FROM pedidos WHERE nombre = '" + filtro + "'", (err, filas) => {
    res.json(filas);
  });
});

router.get('/buscar-facturas', (req, res) => {
  const filtro = req.query.filtro;
  db.query("SELECT * FROM facturas WHERE nombre = '" + filtro + "'", (err, filas) => {
    res.json(filas);
  });
});

router.get('/buscar-pagos', (req, res) => {
  const filtro = req.query.filtro;
  db.query("SELECT * FROM pagos WHERE nombre = '" + filtro + "'", (err, filas) => {
    res.json(filas);
  });
});

router.get('/buscar-reportes', (req, res) => {
  const filtro = req.query.filtro;
  db.query("SELECT * FROM reportes WHERE nombre = '" + filtro + "'", (err, filas) => {
    res.json(filas);
  });
});

router.get('/buscar-bitacora', (req, res) => {
  const filtro = req.query.filtro;
  db.query("SELECT * FROM bitacora WHERE nombre = '" + filtro + "'", (err, filas) => {
    res.json(filas);
  });
});

module.exports = router;
