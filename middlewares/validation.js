const { registrationSchema, loginSchema, verificationSchema } = require('../models/user');
const { BadRequest } = require('http-errors');

const validation = (scheme) => {
  return (req, _, next) => {
    const { error } = scheme.validate(req.body);
    if (error) {
      const errorMessage = error.message.includes('is required')
        ? 'missing required field'
        : error.message.replace(/"/g, '').replace(/\:.*/, '');
      const err = new BadRequest(errorMessage);
      next(err);
    }
    next();
  };
};

const registrationValidator = validation(registrationSchema);
const loginValidator = validation(loginSchema);
const verificationValidator = validation(verificationSchema);

module.exports = {
  validation,
  registrationValidator,
  loginValidator,
  verificationValidator,
};
