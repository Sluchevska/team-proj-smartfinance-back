const { Schema, model } = require('mongoose');
const Joi = require('joi');
const bcrypt = require('bcryptjs');

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verifyToken: {
      type: String,
    },
    balance: {
      type: Number,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.pre('save', async function () {
  if (this.isNew) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

const User = model('User', userSchema);

const registrationSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .required(),
  password: Joi.string().min(5).max(15),
});

const loginSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .required(),
  password: Joi.string().min(5).max(15),
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
