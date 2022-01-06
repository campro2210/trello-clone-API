import { ColumnModel } from '*/models/column.model'
import { BoardModel } from '*/models/board.model'
import { CardModel } from '*/models/card.model'

const createNew = async (data) => {
  try {
    const newColumn = await ColumnModel.createNew(data)
    newColumn.cards =[]
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
    if(updateData._id) delete updateData._id
    if(updateData.cards) delete updateData.cards

    const updatedColumn = await ColumnModel.update(id, updateData)

    if(updatedColumn._destroy) {
      //delete many cards in this column
      CardModel.deleteMany(updatedColumn.cardOrder)
    }

    return updatedColumn
  } catch (error) {
    throw new Error(error)

  }
}

export const ColumnService = { createNew, update }