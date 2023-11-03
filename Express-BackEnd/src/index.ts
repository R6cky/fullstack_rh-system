import express, { NextFunction, Request, Response, response } from 'express'
import cors from 'cors'
import swaggerUiExpress from 'swagger-ui-express'
import swaggerDocument from './swagger.json'
import { routes } from './routes'
import AppError from './errors/appError'
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

export const app = express()

app.use(cors())
app.use(express.json())
app.use('/api-documentation', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocument))
app.use(routes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof AppError) {
    return res.status(err.status).json({message: err.message})
  }

  console.log(err)

  return res.status(500).json({
    message: 'Internal server Error',
    errorName: err.name,
    errorMessage: err.message
  })
})