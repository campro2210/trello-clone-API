import Joi from 'joi'

import { httpStatusCode } from '*/ultilities/constants'

const createNew = async(req, res, next) => {
  const condition = Joi.object({
    title : Joi.string().required().min(3).max(20)
  })
  try {
    await condition.validateAsync(req.body, { abortEarly: false })
    next()
  }
  catch (error) {
    res.status(httpStatusCode.BAD_REQUEST).json({
      errors : new Error(error).message
    })
  }
}

export const BoardValidation = { createNew }