/*
  * TODO:
  * 1. Create a middleware check if the user is logged in
  * 2. Create a middleware check validation of student data
*/

import Joi from "joi";
import Response from "../response/student.js";

export const validateStudent = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    year: Joi.number().integer().min(2000).max(new Date().getFullYear()).required(),
    semester: Joi.number().integer().min(1).max(16).required(),
    major: Joi.string().min(2).required(),
    faculty: Joi.string().min(2).required(),
    concentration: Joi.string().min(2).required(),
    supervisior: Joi.string().min(3).required(),
    address: Joi.string().min(3).required(),
    gender: Joi.string().valid('L', 'P').required(),
  });

  const { error } = schema.validate(req.body);

  if (error) return Response.badRequest(res, error.message)

  next();
}
