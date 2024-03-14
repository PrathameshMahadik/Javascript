// 3. Convert a callback-based API to a Promise-based API (function fetchData(callback)
// { setTimeout(() => { callback(null, "Data fetched successfully"); }, 1000); })
const util = require("util");
function fetchData(callback) {
  setTimeout(() => {
    callback(null, "Data fetched successfully");
  }, 1000);
}
const callback = (a, b) => {
  if (!a) {
    console.log("callback called");
  }
  if (b) {
    console.log(b);
  }
};
const promiseFetchData = util.promisify(fetchData);
promiseFetchData(callback)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
