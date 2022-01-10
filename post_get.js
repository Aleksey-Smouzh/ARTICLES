const getResourse = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`error at the url ${url}, error ststus ${response}`);
  }
  return await response.json();
};
const data = getResourse("https://61d496de8df81200178a8d99.mockapi.io/api/v1/user").then((data) => console.log(data))


