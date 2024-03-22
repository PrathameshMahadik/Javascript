/*12. async function getData() {
   setTimeout(function() { return [1, 2, 3, 4, 5]; }, 1000); }
getData().then(function(data) {
   console.log(data);
});*/
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve([1, 2, 3, 4, 5]);
    }, 1000);
  });
}
getData()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
