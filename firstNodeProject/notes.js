
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log(module);
//Accessing exports + adding to exports
module.exports = {
  //Use commas
  //Adding properties to the export objecte
  //To allow for other files to access these methods, etc.
  add: add,
  sub: sub
}
console.log(module.exports);
