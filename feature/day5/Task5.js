/* 5. Write a program flattenObject that takes an object with nested properties and returns a flat object 
with the nested properties transformed into dot-separated properties. 
The function should handle nested objects and arrays.
const obj = {
   a: 1,
   b: { c: 2, d: [3, 4] }
};
Output: { 'a': 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 }*/
const obj = {
  a: 1,
  b: { c: 2, d: [3, 4] },
};
let parent = "";
function flattenObj(obj, parent, res = {}) {
  for (key in obj) {
    let propName = parent ? parent + "." + key : key;
    if (typeof obj[key] == "object") {
      flattenObj(obj[key], propName, res);
    } else {
      res[propName] = obj[key];
    }
  }
  return res;
}
console.log(flattenObj(obj, parent));
