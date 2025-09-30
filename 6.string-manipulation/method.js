const username = "naruto";
// const firstLetter = username.charAt(0);
const firstLetterUppercase = username.charAt(0).toUpperCase(); // N

const restOfUsername = username.slice(1);

// console.log(firstLetterUppercase + restOfUsername);
// console.log(firstLetterUppercase + username.slice(1));
console.log(username.slice(0, 1).toUpperCase() + username.slice(1));