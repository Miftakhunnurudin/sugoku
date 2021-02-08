export default function inputAnswer (payload) {
  return async (dispatch) => {
    dispatch({
      type: 'INPUT_ANSWER',
      payload
    })
  }
}