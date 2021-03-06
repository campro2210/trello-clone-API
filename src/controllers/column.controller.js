import { ColumnService } from '*/services/column.service'
import { httpStatusCode } from '*/ultilities/constants'


const createNew = async (req, res) => {
  try {
    const result = await ColumnService.createNew(req.body)
    console.log(result)
    res.status(httpStatusCode.OK).json(result)
  } catch (error) {
    res.status(httpStatusCode.INTERNAL_SERVER).json({
      errors : error.message
    })

  }
}


const update = async (req, res) => {
  try {
    const { id } = req.params
    const result = await ColumnService.update(id, req.body)
    console.log(result)
    res.status(httpStatusCode.OK).json(result)
  } catch (error) {
    res.status(httpStatusCode.INTERNAL_SERVER).json({
      errors : error.message
    })

  }
}

export const ColumnController = { createNew, update }