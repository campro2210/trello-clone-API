import { ColumnModel } from '*/models/column.model'
import { BoardModel } from '*/models/board.model'

const createNew = async (data) => {
  try {
    const newColumn = await ColumnModel.createNew(data)
    const getNewColumn = await ColumnModel.findOneById(newColumn.insertedId.toString())
    // update columnOrder array in board
    const updateBoard = await BoardModel.pushColumnOrder(getNewColumn.boardId.toString(), getNewColumn._id.toString())

    return newColumn
  } catch (error) {
    throw new Error(error)

  }
}

const update = async (id, data) => {
  try {
    const updateData ={ ...data,
      updateAt : Date.now()
    }
    const result = await ColumnModel.update(id, data)
    return result
  } catch (error) {
    throw new Error(error)

  }
}

export const ColumnService = { createNew, update }