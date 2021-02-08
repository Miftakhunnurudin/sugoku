const initialStateBoard = {
  loading: false,
  board: [],
  validate: ''
}

const boardReducer = (state = initialStateBoard, action) => {
  switch (action.type) {
    case 'FETCH_BOARD_START':
      return {...state, loading:true}
    case 'FETCH_BOARD_DONE':
      return {...state, loading:false, board: action.payload}
    case 'INPUT_ANSWER':
      const board = [...state.board]
      const {number,idxRow,idxCol} = action.payload
      board [idxRow][idxCol] = +number
      return {...state, board}
    case 'VALIDATE_ANSWER':
      return {...state, validate:action.payload}
    default:
      return state
  }
}

export default boardReducer