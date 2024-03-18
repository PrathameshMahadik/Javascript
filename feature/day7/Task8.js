// 8. Create a function that fetches data from multiple APIs in parallel and then performs
// some operation on the combined data, using async/await.
const giveRes = (p1, p2, p3) => {
  Promise.all([p1, p2, p3])
    .then((values) => console.log(values))
    .catch((err) => console.log(err));
};
const fetchData1 = async (url, heads) => {
  try {
    let response = await fetch(url, { headers: heads });
    let data = response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
const url1 = "https://currency-exchange.p.rapidapi.com/listquotes";
const headers1 = {
  "X-RapidAPI-Key": "e506a53a8fmsh590af1fe09ad06fp168bd2jsne105e9ecd714",
  "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
};
let p1 = fetchData1(url1, headers1);
const url2 =
  "https://numbersapi.p.rapidapi.com/6/21/date?fragment=true&json=true";
const headers2 = {
  "X-RapidAPI-Key": "e506a53a8fmsh590af1fe09ad06fp168bd2jsne105e9ecd714",
  "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
};
let p2 = fetchData1(url2, headers2);
const url3 = "https://food-center.p.rapidapi.com/";
const headers3 = {
  "X-RapidAPI-Key": "e506a53a8fmsh590af1fe09ad06fp168bd2jsne105e9ecd714",
  "X-RapidAPI-Host": "food-center.p.rapidapi.com",
};
let p3 = fetchData1(url1, headers1);

Promise.all([p1, p2, p3])
  .then(async function (values) {
    values["Value"] = "Value added...";
    console.log(values);
  })
  .catch((err) => console.log(err));
