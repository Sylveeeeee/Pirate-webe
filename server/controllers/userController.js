const User = require('../models/user'); // Assuming you have a User model set up

// Get user by ID
const getUserById = async (id) => {
  return await User.findById(id).select('-password'); // Exclude password for security
};

// Update user field
const updateUserField = async (id, field, value) => {
  const validFields = ['name', 'email', 'phone']; // Specify valid fields for update
  if (!validFields.includes(field)) {
    throw new Error('Invalid field');
  }

  const updatedUser = await User.findByIdAndUpdate(id, { [field]: value }, { new: true });
  return updatedUser;
};

module.exports = { getUserById, updateUserField };
