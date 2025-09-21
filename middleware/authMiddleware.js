// middleware/authMiddleware.js
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  // Validar que venga el header
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No autorizado. Token faltante o mal formado.' });
  }

  const token = authHeader.split(' ')[1];

  // Token fijo solo para esta prueba
  if (token !== process.env.AUTH_TOKEN) {
    return res.status(403).json({ error: 'Token inválido' });
  }

  next(); // Si todo está bien, continuar
};

module.exports = authMiddleware;