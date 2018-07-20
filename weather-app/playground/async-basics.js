console.log("Starting app");
//Delays for 2 seconds
//Does not 'block' the code beneath it
setTimeout(() => {
  console.log("First setTimeout");
}, 2000)
//Runs after the regular log's have
//been printed to the console
setTimeout(() => {
  console.log("Second setTimeout");
}, 0)
console.log("Finishing app");

const double = x => 2 * x;
const double_then_add_five = x => double(x) + 5;

console.log("Hello");
const num = double_then_add_five(4);
console.log(num, "Bye");

/*Notes:

~Call Stack~
- Anytime a function is called it is put onto the 'stack'
- Once it is returns it if off the stack
- If a function requires another function, it gets stacked on top -->
  goes until functions begin to run from the top down (removes them
  from the stack after they are run)
- Runs till stack is empty

~Node API~
- When unique method is called such as setTimeOut, it waits in the Node
  API until all other code is run, then the select methods run and are
  placed in a Callback Queue
- Then these methods are placed into an Event Loop
- ONCE 'MAIN' (OR CALL STACK IS EMPTY) IS EXECUTED THE EVENT LOOP CAN RUN

~Callback Queue~
- Adds methods to the bottom or it (below it)

~Heap~
- Where all the data and memory are saved

*/
