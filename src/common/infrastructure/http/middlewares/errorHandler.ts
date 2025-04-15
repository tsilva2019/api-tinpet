import { NextFunction, Request, Response } from 'express'
import { AppError } from '@/common/domain/errors/app.error'
export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction,
): Response {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: {
        status: 'error',
        message: err.message,
      },
    })
  }

  console.log(err)

  return res.status(500).json({
    message: {
      status: 'error',
      message: 'Internal server error',
    },
  })
}
