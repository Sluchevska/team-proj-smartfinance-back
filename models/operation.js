const { Schema, model, trusted } = require("mongoose");
const Joi = require("joi");
const { version } = require("joi");

const operationSchema = Schema(
  {
    date: {
      type: String,
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
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

const oparationJoiSchema = Joi.object({
  date: Joi.string().required(),
  category: Joi.string().required(),
  description: Joi.string(),
  type: Joi.string().valid("profit", "consumption"),
  sum: Joi.number(),
});

const Operation = model("Operation", operationSchema);
module.exports = {
  Operation,
  oparationJoiSchema,
};
