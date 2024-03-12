// 1. Write a program to iterate over object.
let obj = {
  firstname: "Prathamesh",
  age: 24,
  address: "Kolhapur",
  abc: {a:24,b:35}
};
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    value = obj[key];
    console.log(key, ":", value);
  }
}
