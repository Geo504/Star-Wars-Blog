export const apiCall = (url) => {
  return (
    fetch(url)
    .then((res) => {
      if (!(res.status >= 200 && res.status < 300)) {
        throw Error(`You have an error ${res.status} in request data!`);
      }
      return res.json();
    })
    .then(response=>{
      return response;
    })
  )
}