// console.log("start");

// setTimeout(() => {
//     console.log("This run after 2 sec.");
// }, 2000);

// console.log("End");


//! -   mini Experiment --

console.log("Start Script");

setTimeout(() =>{
    console.log("Timeout 1!");
}, 0);

Promise.resolve().then(() => {
    console.log("promise 1!!"); //* checked with higher priority
});

console.log("End Script");