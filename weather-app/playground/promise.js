//Proved 2 methods:
//Function to call if there is an error
//Function to call if there is no error
//--> improvement on the nested call backs

const promiseAdd = (x, y) => {
  //Constructor, takes only one argument, and is a function
  //the function takes 2 parameters
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof x === 'number' && typeof y === 'number') {
        if(x + y === 3) {
          //generate your own error
          // throw new Error;
        }
        resolve(x+y);
      } else {
        reject("Both x and y must be numbers.");
      }
    }, 1500)
  })
}

//Function returns a promise object
//*SHOULD RETURN ONE THING*
//so .then --> calls resolve for you
//Can chain .then's for returning promise objects
//and .catch --> runs reject for you
promiseAdd(1, 2)
  .then((result) => {
    console.log("Add was successful");
    console.log("Result: ", result);
    return promiseAdd(result, "4");
  })
  .then((result) => {
    console.log("Second add was successful");
    console.log("Second result: ", result);
  })
  .catch((error) => {
      console.log(error);
  })
