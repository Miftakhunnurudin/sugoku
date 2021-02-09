import axios from 'axios'

export default function fetchBoard (difficulty) {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'FETCH_BOARD_START'
      })

      const {data} = await axios({
        url: 'https://sugoku.herokuapp.com/board?difficulty='+difficulty,
        method: 'GET'
      })

      const {board} = data
      // console.log(difficulty,'fetchBoard');
      dispatch({
        type: 'FETCH_BOARD_DONE',
        payload: board
      })
    } catch (error) {
      console.log(error);
    }
  }
}