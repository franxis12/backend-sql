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


const getUserById = (req, res) => {
  const userId = req.params.id;

  const sql = 'SELECT * FROM users WHERE id = ?';
  db.query(sql, [userId], (err, results) => {
    if (err) {
      console.error('Error al obtener usuario:', err);
      return res.status(500).json({ error: 'Error interno' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json(results[0]);
  });
};
 

const createUser = (req, res) => {
  const { name, email, password } = req.body;

  if (!name?.trim() || !email?.trim() || !password?.trim()) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  const values = [name, email, password];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al insertar usuario:', err);
      return res.status(500).json({ error: 'Error interno al crear el usuario' });
    }
//
    res.status(201).json({ message: 'Usuario creado correctamente', userId: result.insertId });
  });
}

const updateUser = (req, res) => {
  const {id} = req.params;
  const { name, email, password } = req.body;

  if (!id || !name?.trim() || !email?.trim() || !password?.trim()) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  const sql = 'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?';

  db.query(sql, [name, email, password, id], (err, result) => {
    if (err) {
      console.error('Error al actualizar usuario:', err);
      return res.status(500).json({ error: 'Error interno al actualizar el usuario' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json({ message: 'Usuario actualizado correctamente' });
  });
}

const deleteUser = (req, res) => {
   const { id } = req.params;

     if (!id) {
    return res.status(400).json({ error: 'ID es requerido' });
  }
    
    const sql = 'DELETE FROM users WHERE id = ?';


    db.query(sql, [id], (err, result) => {
        if (err) {
            console.log('Error when deleting user', err);
            return res.status(500).json({error: 'Internal error whe deleting user'})
        }
         if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json({ message: 'Usuario eliminado correctamente' });
    })
}


module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};