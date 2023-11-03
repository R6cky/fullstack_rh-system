import { NextFunction, Request, Response } from "express";
import { createCategoryService, readAllCategoriesService } from "../services/category.service";
import { ICreateCategory } from "../interfaces";


export  const createCategoryController = async(req: Request, res: Response, next: NextFunction) => {
  const data: ICreateCategory = req.body
  const {id} = req.user

  try {
    const newCategory = await createCategoryService(data, id)

    return res.json(newCategory)
  } catch (error) {
    next(error)
  }
}

export const readAllCategoriesController = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const allCategories = await readAllCategoriesService()

    return res.send(allCategories)
  } catch (error) {
    next(error)
  }
}
