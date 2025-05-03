import {add, subtract, multiplication, division} from "./math.js"

console.log("Add: ", add(10, 5));
console.log("Subtract: ", subtract(10, 5));
console.log("Multiplication: ", multiplication(10, 5));
console.log("Division: ", division(10, 5));


import readline from  'readline'

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});


function calculate() {
    rl.question("What you want to do:--- \n 1.Add\t2.Subtraction\t3.Multiplication\t4.Division\t5.Exit \nAns: ", (opt) => {
        if (opt === '5') {
            console.log("Exiting program...");
            rl.close();
            return; 
        }

        rl.question("Enter your first number: ", (num1) => {
            rl.question("Enter your second number: ", (num2) => {
                let result;
                switch (Number(opt)) {
                    case 1:
                        result = add(Number(num1), Number(num2));
                        break;
                    case 2:
                        result = subtract(Number(num1), Number(num2));
                        break;
                    case 3:
                        result = multiplication(Number(num1), Number(num2));
                        break;
                    case 4:
                        result = division(Number(num1), Number(num2));
                        break;
                    default:
                        console.log("Invalid option. Please try again.");
                        calculate(); 
                        return;
                }

                console.log(`Result: ${result}`);
                calculate(); 
            });
        });
    });
}

calculate();

