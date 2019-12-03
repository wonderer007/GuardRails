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

export const submitSecurityScanReport = (params) => {
  return (dispatch) => {
    const url = 'http://localhost:5000/api/results';

    axios
    .post(url, params)
    .then(response => {
      alert('report added successfully')
      window.location = window.location.origin
      console.log(response)
    })
    .catch(error => {
      alert('something went wrong, please try again')
      console.log(error)
    });
  }
}
