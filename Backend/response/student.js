class Response {
  static success(res, data, page, limit, message = 'Get all data successfully') {
    return res.status(200).json({
      code: 200,
      success: true,
      message,
      data: data.map((item) => {
        return {
          id: item.id,
          nim: item.nim,
          name: item.name,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
        };
      }),
      pagination: {
        totalData: data.length,
        totalPage: Math.ceil(data.length / limit),
        currentPage: page
      },
    });
  }

  static getDetailData(res, data, message = 'Get detail data successfully') {
    return res.status(200).json({ code: 200, success: true, message, data })
  }

  static created(res, data, message = 'Data created successfully') {
    return res.status(201).json({
      code: 200,
      success: true,
      message,
      data: {
        id: data.id,
        nim: data.nim,
        name: data.name,
        createdAt: data.createdAt,
      }
    });
  }

  static updated(res, data, message = 'Data updated successfully') {
    return res.status(200).json({
      code: 200,
      success: true,
      message,
      data: {
        id: data.id,
        nim: data.nim,
        name: data.name,
        updatedAt: data.updatedAt,
      }
    });
  }

  static deleted(res, message = 'Data deleted successfully') {
    return res.status(204).json({ code: 204, success: true, message });
  }

  static notFound(res, message = 'Data not found') {
    return res.status(404).json({ code: 404, success: false, message });
  }

  static badRequest(res, message = 'Bad request') {
    return res.status(400).json({ code: 400, success: false, message });
  }

  static unauthorized(res, message = 'Unauthorized') {
    return res.status(401).json({ code: 401, success: false, message });
  }

  static serverError(res, message = 'Server Error') {
    return res.status(500).json({ code: 500, success: false, message });
  }
}

export default Response;
