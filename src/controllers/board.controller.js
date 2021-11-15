import { BoardService } from '*/services/board.service'
import { httpStatusCode } from '*/ultilities/constants'


const createNew = async (req, res) => {
  try {
    const result = await BoardService.createNew(req.body)
    console.log(result)
    res.status(httpStatusCode.OK).json(result)
  } catch (error) {
    res.status(httpStatusCode.INTERNAL_SERVER).json({
      errors : error.message
    })

  }
}

export const BoardController = { createNew }