/*
  * TODO:
  * 1. Create a middleware check if the user is logged in
  * 2. Create a middleware check validation of student data
*/

import Joi from "joi";
import dotenv from 'dotenv';
import User from "../models/user.js";
import Response from "../response/student.js";

dotenv.config();

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

export const validateUser = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    username: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required()
  });

  const { error } = schema.validate(req.body);

  if (error) return Response.badRequest(res, error.message)

  next();
}

export const validateLogin = (req, res, next) => {
  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(5).required()
  });

  const { error } = schema.validate(req.body);

  if (error) return Response.badRequest(res, error.message)

  next();
}

export const validateToken = (req, res, next) => {
  const token = req.header('authorization');
  if (!token) return Response.unauthorized(res, 'Access Denied');

  try {
    const verified = jwt.verify(token, process.env.JTW_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    Response.unauthorized(res, 'Invalid Token');
  }
}
