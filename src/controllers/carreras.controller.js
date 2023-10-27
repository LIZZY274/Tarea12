const db = require('../config/conexion');

const obtenerCarrera = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM carrreras', (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

const obtenerCarrerasPorid = (id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM carreras WHERE id = ?', [id], (err, results) => {
      if (err) reject(err);
      resolve(results[0]);
    });
  });
} 

const crearCarreras = (carrera) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO carrera SET ?', carrera, (err, results) => {
      if (err) reject(err);
      resolve(results);
    }); 
  });
}

const actualizarCarreras = (id, carrreras) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE carrreras SET ? WHERE id = ?', [carrreras, id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

const borrarCarrera = (id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM usuario WHERE id = ?', [id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

module.exports = {
  obtenerCarrera,
  obtenerCarrerasPorid, 
  crearCarreras,
  actualizarCarreras,
  borrarCarrera
}