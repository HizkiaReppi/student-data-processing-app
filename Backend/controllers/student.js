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

export const getAllData = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const data = await Student.findAll({
      offset: (page - 1) * limit,
      limit
    });

    const totalCount = await Student.count();
    const totalPages = Math.ceil(totalCount / limit);

    if (page > totalPages) {
      Response.notFound(res, 'Page not found');
      return;
    }

    Response.success(res, data, page, totalCount, totalPages);
  } catch (error) {
    Response.serverError(res, error.message);
  }
};

export const getDetailData = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Student.findByPk(id);

    if (!data) {
      Response.notFound(res);
      return;
    }

    Response.getDetailData(res, data);
  } catch (error) {
    Response.serverError(res, error.message);
  }
};

export const updateData = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const data = await Student.findByPk(id);

    if (!data) {
      Response.notFound(res);
      return;
    }

    updateData.updatedAt = new Date();
    await data.update(updateData);

    Response.updated(res, data);
  } catch (error) {
    Response.serverError(res, error.message);
  }
};

export const deleteData = async (req, res) => {};

export const deleteAllData = async (req, res) => {};
