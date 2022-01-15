const { Schema, model } = require('mongoose');
const Joi = require('joi');

const operationSchema = new Schema({
  date: {
        type: Date
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
  day: {
    type: Number,
  },
  month: {
    type: Number,
  },
  year: {
    type: Number,
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
  type: Joi.string().valid("profit", "consumption"),
  sum: Joi.number()
});

const Operation = model('Operation', operationSchema)
module.exports = {
  Operation,
  operationJoiSchema
}