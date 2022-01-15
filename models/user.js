const { Schema, model } = require('mongoose');
const Joi = require('joi');
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  name: {
        type: String,
      },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  token: {
    type: String,
    default: null,
  },
  avatarURL: {
    type: String,
    required: true,
  },
  verify: {
    type: Boolean,
    default: false,
  },
  verifyToken: {
    type: String,
    required: [true, "Verify token is required"],
  },
});

userSchema.pre("save", async function () {
  if (this.isNew) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});
const User = model("user", userSchema);

const registrationSchema = Joi.object({
    email: Joi.string()
      .email({
        minDomainSegments: 2,
      })
      .required(),
    password: Joi.string().min(5).max(15).required(),
    token: Joi.string(),
    avatarURL: Joi.string(),
  });
  
  const loginSchema = Joi.object({
    email: Joi.string()
      .email({
        minDomainSegments: 2,
      })
      .required(),
    password: Joi.string().min(5).max(15).required(),
  });
  
  const verificationSchema = Joi.object({
    email: Joi.string()
      .email({
        minDomainSegments: 2,
      })
      .required(),
  });
  

module.exports = {
    User,
    registrationSchema,
    loginSchema,
    verificationSchema,
};