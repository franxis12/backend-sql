require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Backend connected to MySQL');
})
/*
app.get('/users', (req,res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if(err) {
            console.error('Error trying to obtain users:', err);
            res.status(500).send('Error trying obtain users')
        } else {
            res.json(results);
        }
    })
})*/
/*
app.get('/users/:id', (req, res) => {
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
});

app.post('/users', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  const values = [name, email, password];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al insertar usuario:', err);
      return res.status(500).json({ error: 'Error interno al crear el usuario' });
    }

    res.status(201).json({ message: 'Usuario creado correctamente', userId: result.insertId });
  });
});

app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    
    const sql = 'DELETE FROM users WHERE id = ?';


    db.query(sql, [userId], (err, result) => {
        if (err) {
            console.log('Error when deleting user', err);
            return res.status(500).json({error: 'Internal error whe deleting user'})
        }
         if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json({ message: 'Usuario eliminado correctamente' });
    })
})

/*app.put('/users/:id', (req, res) => {
  const id = req.params.id;
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
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
});*/


app.listen(port, ()=> {
    console.log(`Server running on http://localhost:${port}`);
});