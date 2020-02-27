import axios from 'axios';

export function PostData(userData, endpoint) {
    let formData = new FormData();
    formData.append("content", JSON.stringify(userData));

    axios.post(endpoint, formData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}