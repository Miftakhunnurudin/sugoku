import axios from 'axios'

export default function fetchBoard (board) {
  return async (dispatch) => {
    try {
      const data = {
        board:board
      }
      const {data} = await axios({
        url: 'https://sugoku.herokuapp.com/validate',
        method: 'POST',
        data
      })

      dispatch({
        type: 'FETCH_BOARD_DONE',
        payload: data.status
      })

    } catch (error) {
      console.log(error);
    }
  }
}