import jwt from 'jsonwebtoken';
import Registration from './models/Registration.js';

export const adminLogin = (req, res) => {
  
  const { username, password } = req.body;

  if ( username !== process.env.username || password !== process.env.password) {

    return res.status(401).json({
      success: false,
      message: 'Invalid credentials',
      data: null
    });
  
  }

  const token = jwt.sign(
    { username, role: 'admin' },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.status(200).json({
    success: true,
    message: 'Login successful',
    token
  });
};

export const createRegistration = async (req, res) => {
  
  const { body } = req;
  const data = await Registration.create(body);

  return res.status(201).json({ 
    success: true, 
    data,
    message:'Registration successful'
  });

};

export const getAllRegistrations = async (req, res) => {

  const data = await Registration.find();
  
  return res.status(200).json({ 
    success: true, 
    length: data.length, 
    data: data
  });

};

export const getRegistrationById = async (req, res) => {
  
  const { id } = req.params; 
  const data = await Registration.findById(id);
  
  if (!data) {
    return res.status(404).json({
      success: false,
      message: 'Registration not found',
      data: null
    });
  }

 return res.status(200).json({ 
  success: true, 
  message: 'Registration fetched successfully',
  data: data
  
});

};

export const updateRegistration = async (req, res) => {
  
  const { id } = req.params;
  const { body } = req;
  const data = await Registration.findByIdAndUpdate(
    id,
    body,
    { new: true, runValidators: true }
  );

  if (!data) {
    return res.status(404).json({
      success: false,
      message: 'Registration not found',
      data: null
    });
  }

  res.status(200).json({ 
    success: true, 
    message: 'Entry updated successfully',
    data: data
  });

};

export const deleteRegistration = async (req, res) => {

  const { id } = req.params;
  const data = await Registration.findByIdAndDelete(id);

  if (!data) {
    return res.status(404).json({
      success: false,
      message: 'Registration not found',
      data: null
    });
  }

  res.status(200).json({
    success: true,
    message: 'Registration deleted',
    data: null
  });

};
