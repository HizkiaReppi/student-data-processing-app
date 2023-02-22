import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import User from '../models/user.js';
import Response from '../response/user.js';

dotenv.config()

export const register = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    const usernameExist = await User.findOne({
      where: {
        username,
      },
    });

    if(usernameExist) {
      return Response.badRequest(res, 'Username already exist');
    }

    const emailExist = await User.findOne({
      where: {
        email,
      },
    });

    if(emailExist) {
      return Response.badRequest(res, 'Email already exist');
    }
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const data = await User.create({
      name,
      username,
      email,
      password: hashedPassword
    })

    Response.success(res, data);
    
  } catch (error) {
    Response.serverError(res, error.message);
  }
}

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({
      where: {
        username,
      },
    });

    if (!user) {
      return Response.unauthorized(res, 'Username not found');
    }

    const validPass = await bcrypt.compare(password, user.password);

    if (!validPass) {
      return Response.unauthorized(res, 'Invalid password');
    }

    const token = jwt.sign(
      { id: user.id },
      process.env.JTW_SECRET,
      { expiresIn: '1h' }
    );

    Response.login(res, user, token);

  } catch (error) {
    Response.serverError(res, error.message);
  }
}
