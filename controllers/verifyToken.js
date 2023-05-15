const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const jsonWebToken = req.headers.authorization;
  if (!jsonWebToken) {
    return res.status(401).json({ error: 'You need to be logged in to access this route' });
  }
  const token = jsonWebToken.split(' ')[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json({ error: 'You are not authorized to access this route' });
    }
  });
};

module.exports = { verifyToken, verifyAdmin };
