import axios from 'axios'

export const loadResults = () => {
  return (dispatch) => {
    const url = 'http://localhost:5000/api/results';

    axios.get(url)
    .then(response => {
      dispatch(
        {
          type: "SET_RESULTS",
          payload: {
            results: response.data.results
        }
      });
    })
    .catch(error => {
      console.log(error)
    });
  }
}
