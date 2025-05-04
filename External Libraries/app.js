import chalk from 'chalk' 
import validator from 'validator'

//* colorful text using Chalk
console.log(chalk.green('Success !'));
console.log(chalk.red.bold('Error !'));
console.log(chalk.bgBlue.white('Hello Node.js!'));

//* Validation using validator
console.log('Is email valid?', validator.isEmail('test@example.com'));
console.log('Is URL valid?', validator.isURL('https://google.com'));
console.log('Is phone valid?', validator.isMobilePhone('9999999999', 'en-IN'));

