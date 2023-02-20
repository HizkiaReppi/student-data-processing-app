import Student from '../models/student.js';
import Response from '../response/student.js';

export const addData = async (req, res) => {
  try {
    const data = await Student.create(req.body);

    Response.created(res, data);
  } catch (error) {
    Response.serverError(res, error.message);
  }
};

export const getAllData = async (req, res) => {};

export const getDetailData = async (req, res) => {};

export const deleteData = async (req, res) => {};

export const deleteAllData = async (req, res) => {};
