// const processor = (callback) => {
//     callback();
//     // console.log("hello")    
// }

// const greeting = () => {
//     console.log("hello world");
// }

// const goodbay = () => {
//     console.log("goodbay");
// }

// processor(greeting);
// processor(goodbay);

const calculate = (x, y, callback) => {
   return callback(x, y);
}

// const sum = (x, y) => {
//     console.log(x + y);
// };

const sum = (x, y) => x + y;

console.log (calculate(1, 2, sum));
