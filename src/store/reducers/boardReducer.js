const initialStateBoard = {
  loading: false,
  board: [],
  answer: [],
  status: 'unsolved'
}

const boardReducer = (state = initialStateBoard, action) => {
  switch (action.type) {
    case 'FETCH_BOARD_START':
      return {...state, loading:true}
    case 'FETCH_BOARD_DONE':
      const board_data = action.payload
      return {...state, loading:false, board: [...board_data.map(row => [...row])], answer: [...board_data.map(row => [...row])]}
    case 'INPUT_ANSWER':
      const answer = [...state.answer]
      const {number,idxRow,idxCol} = action.payload
      answer [idxRow][idxCol] = +number
      return {...state, answer}
    case 'VALIDATE_ANSWER':
      return {...state, status:action.payload}
    case 'SOLVE_BOARD':
      const {status, solution} = action.payload
      return {...state, status, answer:solution}
    case 'RESET':
      return initialStateBoard
    default:
      return state
  }
}

export default boardReducer