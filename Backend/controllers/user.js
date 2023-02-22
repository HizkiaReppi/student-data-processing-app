import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import User from '../models/user.js';
import Response from '../response/user.js';

dotenv.config()

export const register = async (req, res) => {
  try {
    const { name, username, email, password } = req.body

    const usernameExist = await User.findOne({
      where: {
        username,
      },
    });

    if(usernameExist) {
      Response.badRequest(res, 'Username already exist')
      return;
    }

    const emailExist = await User.findOne({
      where: {
        email,
      },
    });

    if(emailExist) {
      Response.badRequest(res, 'Email already exist')
      return;
    }
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword =  await bcrypt.hash(password, salt)

    const data = await User.create({
      name,
      username,
      email,
      password: hashedPassword
    })

    Response.success(res, data)
    
  } catch (error) {
    Response.serverError(res, error.message)
  }
}
