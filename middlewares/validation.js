const { registrationSchema, loginSchema, verificationSchema } = require('../models/user')

const validation = (scheme) => {
  return (req, _, next) => {
    const { error } = scheme.validate(req.body);
    if (error) {
      const errorMessage = error.message.includes('is required')
        ? 'missing required name field'
        : error.message.replace(/"/g, '').replace(/\:.*/, '');
      const err = new Error(errorMessage);
      err.status = 400;
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

