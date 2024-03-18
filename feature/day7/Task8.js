// 8. Create a function that fetches data from multiple APIs in parallel and then performs
// some operation on the combined data, using async/await.
const fetchData1 = async (url, heads) => {
  try {
    let response = await fetch(url, { headers: heads });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};
const url1 = "https://currency-exchange.p.rapidapi.com/listquotes";
const headers1 = {
  "X-RapidAPI-Key": "e506a53a8fmsh590af1fe09ad06fp168bd2jsne105e9ecd714",
  "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
};
const p1 = fetchData1(url1, headers1);
const url2 =
  "https://numbersapi.p.rapidapi.com/6/21/date?fragment=true&json=true";
const headers2 = {
  "X-RapidAPI-Key": "e506a53a8fmsh590af1fe09ad06fp168bd2jsne105e9ecd714",
  "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
};
const p2 = fetchData1(url2, headers2);
const url3 = "https://food-center.p.rapidapi.com/";
const headers3 = {
  "X-RapidAPI-Key": "e506a53a8fmsh590af1fe09ad06fp168bd2jsne105e9ecd714",
  "X-RapidAPI-Host": "food-center.p.rapidapi.com",
};
const p3 = fetchData1(url1, headers1);
const giveRes = (p1, p2, p3) => {
  Promise.all([p1, p2, p3])
  .then(async function (values) {
    values["Value"] = "Value added...";
    console.log(values);
  })
  .catch((err) => console.log(err));
};
giveRes(p1,p2,p3)