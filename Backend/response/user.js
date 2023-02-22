class Response {
  static success(res, data, message = 'Regist successfully') {
    return res.status(201).json({
      code: 200,
      success: true,
      message,
      data: {
        id: data.id,
        name: data.name,
        username: data.username,
        email: data.email
      }
    });
  }

  static login(res, data, token, message = 'Login successfully') {
    return res
      .header('authorization', token)
      .status(200)
      .json({
      code: 200,
      success: true,
      message,
      data: {
        id: data.id,
        name: data.name,
        username: data.username,
        email: data.email,
        token
      }
    });
  }

  static badRequest(res, message = 'Bad request') {
    return res.status(400).json({ code: 400, success: false, message });
  }
  
  static serverError(res, message = 'Server error') {
    return res.status(500).json({ code: 500, success: false, message });
  }

  static unauthorized(res, message = 'Unauthorized') {
    return res.status(401).json({ code: 401, success: false, message });
  }

  static notFound(res, message = 'Data not found') {
    return res.status(404).json({ code: 404, success: false, message });
  }
}

export default Response;