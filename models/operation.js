const { Schema, model } = require('mongoose');
const Joi = require('joi');

const operationSchema = new Schema({
  date: {
    day: {
      type: Number,
    },
    month: {
      type: Number,
    },
    year: {
      type: Number,
    },
      },
  category: {
    type: String,
    required: [true, "category is required"],
  },
  description: {
    type: String,
  },
  type: {
    type: String,
    required: [true, "type is required"],
  },
  sum: {
    type: Number,
    required: true,
  },
  userId:{
    type: Schema.Types.ObjectId,
    ref: 'user',
  }
});

const operationJoiSchema = Joi.object({
  date: Joi.date().required(),
  category: Joi.string().required(),
  description: Joi.string(),
  type: Joi.string().valid("credit", "debit"),
  sum: Joi.number()
});

const Operation = model('Operation', operationSchema)

module.exports = {
  Operation,
  operationJoiSchema
}