const express = require('express');
const router = express.Router();
const controlador = require('../controllers/carreras.controller');

router.get('/obtenerCarrera', async (req, res) => {
  const carrera = await controlador.obtenerCarrera();
  res.json(carrera);
});

router.post('/crearCarreras/', async (req, res) => {
  const carrera = req.body;
  await controlador.crearCarreras(carrera);
  res.json({message: 'Usuario creado'});
}); 

router.put('/actualizarCarrerasid', async (req, res) => {
  const carrera = req.body;
  await controlador.actualizarCarreras(req.params.id, carrera);
  res.json({message: 'Usuario actualizado'});
});

router.delete('/borrarCarreraid', async (req, res) => {
  await controlador.borrarCarrera(req.params.id);
  res.json({message: 'Carrera borrado'});
});

module.exports = router;