//6. Implement a function that returns a resolved Promise after a specified delay using async/await.
const fun1 = async () => {
  try {
    setTimeout(() => {
      fetchData();
    }, 1000);
  } catch (error) {
    console.error("Error in function fun1:", error);
  }
};
const fetchData = async () => {
  const amt = parseInt(prompt("Enter an amount :"));
  try {
    const fetchPromise = await fetch(
      `https://currency-convertor-api.p.rapidapi.com/convert/${amt}/USD/INR`,
      {
        headers: {
          "X-RapidAPI-Key":
            "e506a53a8fmsh590af1fe09ad06fp168bd2jsne105e9ecd714",
          "X-RapidAPI-Host": "currency-convertor-api.p.rapidapi.com",
        },
      }
    );
    const data = fetchPromise.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
console.log("Start");
fun1();
console.log("end");
