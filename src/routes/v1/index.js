import express from 'express'

import { httpStatusCode } from '*/ultilities/constants'
import { BoardRoutes } from './board.route'

const router = express.Router()

router.get('/status', (req, res) => res.status(httpStatusCode.OK).json({
  status: 'OK!'
}))

router.use('/boards', BoardRoutes)

export const apiV1 = router