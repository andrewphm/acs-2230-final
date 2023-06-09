const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ firstName, lastName, email, hashedPassword });
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.status(201).json({
      user: { firstName: user.firstName, lastName: user.lastName, email: user.email },
      accessToken: token,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+hashedPassword');
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.hashedPassword);
    if (!isPasswordCorrect) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    res.cookie('accessToken', accessToken, { maxAge: 900000, httpOnly: true });

    res.status(200).json({
      user: { firstName: user.firstName, lastName: user.lastName, email: user.email },
      accessToken: token,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  signup,
  login,
};
