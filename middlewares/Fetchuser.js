const jwt = require('jsonwebtoken');
//const PRIVATE_KEY = "jwttest@123";
require('dotenv').config();
const Fetchuser = (req, res, next) => {
  const token = req.header('auth-token');
  try {
  if (!token) {
    return res.status(401).json({ error: "Token not provided" });
  }
    const data = jwt.verify(token, process.env.PRIVATE_KEY);
    req.user = data.user;
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: "Invalid token" });
    }
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: "Token expired" });
    }
    return res.status(500).json({ error: error.message });
  }
};
module.exports = Fetchuser;
