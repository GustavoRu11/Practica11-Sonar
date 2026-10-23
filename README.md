# Practica 11 - Analisis de codigo con SonarCloud

Proyecto academico con fallos de seguridad intencionales para ser analizado con Sonar.
**No ejecutar, no desplegar y no usar en produccion.**

| # | Fallo | Ruta |
|---|-------|------|
| 1 | Credenciales en el codigo | constantes y conexion a BD |
| 2 | Inyeccion SQL | /usuario |
| 3 | XSS reflejado | /hola |
| 4 | Inyeccion de comandos | /ping |
| 5 | Path traversal | /archivo |
| 6 | Redireccion abierta | /ir |
| 7 | Ejecucion de codigo (eval) | /calcular |
| 8 | TLS sin verificar | agente https |
| 9 | Hash MD5 | hashPassword |
| 10 | Token predecible y cookie sin flags | /login |
