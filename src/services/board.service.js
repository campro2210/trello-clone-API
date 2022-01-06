import { BoardModel } from '*/models/board.model'
import { cloneDeep } from 'lodash'
const createNew = async (data) => {
  try {
    const result = await BoardModel.createNew(data)
    return result
  } catch (error) {
    throw new Error(error)

  }
}
const getFullBoard = async (boardId) => {
  try {
    const board = await BoardModel.getFullBoard(boardId)
    //sort column destroy 
    const columnsLive = cloneDeep(board)
    columnsLive.columns = columnsLive.columns.filter(column => !column._destroy)
    // add card to each column
    columnsLive.columns.forEach(column => {
      column.cards= columnsLive.cards.filter(c => c.columnId.toString() === column._id.toString())
    })
    // sort column and card by columnOrder and cardOrder will be pass in frontend

    // remove card from board
    delete columnsLive.cards
    console.log(columnsLive)
    return columnsLive
  } catch (error) {
    throw new Error(error)

  }
}

export const BoardService = { createNew, getFullBoard }