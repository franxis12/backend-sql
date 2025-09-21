const db = require('../config/db');

const getAllUsers = (req, res) => {
  const sql = 'SELECT * FROM users';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error al obtener usuarios:', err);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }

    res.status(200).json(results);
  });
};
//
module.exports = {
  getAllUsers
};