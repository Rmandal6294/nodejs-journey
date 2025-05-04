import validator from 'validator'
import chalk from 'chalk' 


const name = "Ranit";
const email = "ranit@example.com";
const url = "https://ranitmandal.netlify.app";

console.log("Valid Name: ", chalk.green(name.length > 0));
console.log("Valid Email: ", chalk.green(validator.isEmail(email)));
console.log("Valid url: ", chalk.green(validator.isURL(url)));
