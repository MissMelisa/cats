function fetchData(url) {
  return fetch(`${process.env.REACT_APP_URL_API}${url}`, {
    headers: {
      "x-api-key": process.env.REACT_APP_API_KEY,
    },
  }).then((result) => result.json());
}

export default fetchData;
