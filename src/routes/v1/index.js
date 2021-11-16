import express from 'express'

import { httpStatusCode } from '*/ultilities/constants'
import { BoardRoutes } from './board.route'
import { CardRoutes } from './card.route'

import { ColumnRoutes } from './column.route'

const router = express.Router()

router.get('/status', (req, res) => res.status(httpStatusCode.OK).json({
  status: 'OK!'
}))

router.use('/boards', BoardRoutes)


router.use('/columns', ColumnRoutes)

router.use('/cards', CardRoutes )

export const apiV1 = router