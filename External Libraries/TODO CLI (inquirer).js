import inquirer from 'inquirer';
import chalk from 'chalk';


let todos = [];

function todoCLI(){
    inquirer.prompt([  //* Pass your questions in here

        {
            type: "list",
            name: "action",
            message: "Choose an action: ",
            choices: ['Add Todo', 'View Todos', 'Exit']
        }

    ]).then((answers) => { //*  Use user feedback for... whatever!!
      
        if(answers.action === 'Add Todo') {
            inquirer.prompt([
                {
                    type: "input",
                    name: 'todoText',
                    message: 'Enter todo item: '
                }
            ]) .then(res => {
                todos.push(res.todoText);
                console.log(chalk.green('Todo added!'));

                todoCLI();
            });
        } else if(answers.action === 'View Todos') {
            console.log(chalk.yellow('\nYour Todos: '));
            todos.forEach((todo, i) => console.log(`${i + 1}. ${todo}`));
            console.log('');

            todoCLI();
        } else {
            console.log(chalk.blue('Goodbye!'));
        }

    }).catch((error) => {
      if (error.isTtyError) {
        console.log(chalk.red('❌ Prompt couldn’t be rendered in the current environment.'));
      } else {
        console.log(chalk.red('❌ Something went wrong:'), error.message);
      }
    });
}
todoCLI();