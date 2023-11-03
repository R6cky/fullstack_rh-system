import { NextFunction, Request, Response } from "express";
import { ILoginData } from "../interfaces";
import { authService } from "../services/session.service";

export const loginController = async (req: Request, res: Response, next: NextFunction) => {
  const data: ILoginData = req.body

  try {
    const authUser = await authService(data)

    return res.send(authUser)
  } catch (error) {
    next(error)
  }
}