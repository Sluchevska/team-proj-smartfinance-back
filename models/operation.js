const { Schema, model } = require('mongoose');
const Joi = require('joi');

const operationSchema = new Schema({
  date: {
    type: String,
    required: true,
  },
  day: {
    type: Number,
    required: true,
  },
  month: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: [true, 'category is required'],
  },
  description: {
    type: String,
  },
  type: {
    type: String,
    enum: ['income', 'expenses'],
    required: [true, 'type is required'],
  },
  sum: {
    type: Number,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
});

const operationJoiSchema = Joi.object({
  date: Joi.string().required(),
  category: Joi.string().required(),
  description: Joi.string(),
  type: Joi.string().valid('income', 'expences'),
  sum: Joi.number(),
});

const Operation = model('Operation', operationSchema);

module.exports = {
  Operation,
  operationJoiSchema,
};
