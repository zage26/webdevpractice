const add = (x, y) => {
  return x + y
}

// const result = add(1, 2)
// return result

const addCallBack = (x, y, callback) => {
  const result = x+y
  callback(result);
}

addCallBack(1, 2, (result) => {
  console.log("My result is: " + result);
})
