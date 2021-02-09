import axios from 'axios'

const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '')

const encodeParams = (params) => 
  Object.keys(params)
  .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
  .join('&');

export default function validateAnswer (board) {
  return async (dispatch) => {
    try {
      const payload = {
        board:board
      }

      const {data} = await axios({
        url: 'https://sugoku.herokuapp.com/solve',
        method: 'POST',
        data: encodeParams(payload),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })

      dispatch({
        type: 'SOLVE_BOARD',
        payload: data
      })

    } catch (error) {
      console.log(error);
    }
  }
}