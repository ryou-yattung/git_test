// fetch("https://cataas.com/api/tags")
//   .then((res) => res.json())
//   .then(console.log);

const getDatas = async function () {
  const response = await fetch("https://cataas.com/api/tags");
  const data = await response.json();
  console.log(data);
};
getDatas();
