import { compare } from "bcryptjs";
import { prisma } from "..";
import AppError from "../errors/appError";
import { ILoginData } from "../interfaces";
import auth from "../configs/auth";
import { sign } from "jsonwebtoken";

export const authService = async ({ email, password }: ILoginData) => {
  const employee = await prisma.employee.findUnique({
    where: {
      email
    }
  })

  if(!employee) {
    throw new AppError('Email ou senha inválidos', 401)
  }

  const passMatch = await compare(password, employee.password)

  if(!passMatch) {
    throw new AppError('Email ou senha inválidos', 401)
  }

  const {secret, expiresIn} = auth.jwt

  const token = sign({}, secret, {
    subject: employee.id,
    expiresIn
  })

  return {
    authToken: token,
    isAdm: employee.is_admin
  }
}