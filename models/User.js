const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hashedPassword: {
    type: String,
    required: true,
    select: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model('user', userSchema);

const seedAdmin = async () => {
  try {
    const admin = await User.findOne({ email: 'admin@test.com' });
    if (!admin) {
      const user = await User.create({
        name: 'Admin',
        email: 'admin@test.com',
        password: '123456',
        isAdmin: true,
      });
      console.log('Admin user created', user);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = mongoose.model.User || User;
