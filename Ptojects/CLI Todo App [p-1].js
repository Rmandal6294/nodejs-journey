import inquirer from 'inquirer';
import chalk from 'chalk';
import figlet from 'figlet';
import boxen from 'boxen';

let todos = [];

function showWelcome() {
  figlet('TODO APP', (err, data) => {
    if (err) {
      console.log('Error generating banner');
      return;
    }
    console.log(
      boxen(data, {
        padding: 1,
        margin: 1,
        borderStyle: 'round',
        borderColor: 'green',
      })
    );
    showMenu();
  });
}


function showMenu() {
  inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: ['Add Todo', 'View Todos', 'Delete Todo', 'Exit'],
      },
    ])
    .then((answer) => {
      switch (answer.action) {
        case 'Add Todo':
          addTodo();
          break;
        case 'View Todos':
          viewTodos();
          break;
        case 'Delete Todo':
          deleteTodo();
          break;
        case 'Exit':
          console.log(chalk.cyanBright('👋 Goodbye!'));
          break;
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log(chalk.red('❌ Prompt couldn’t be rendered in the current environment.'));
      } else {
        console.log(chalk.red('❌ Something went wrong:'), error.message);
      }
    });
}


function addTodo() {
  inquirer.prompt([
      {
        type: 'input',
        name: 'todoText',
        message: 'Enter your todo:',
      },
    ])
    .then((res) => {
      todos.push(res.todoText);
      console.log(chalk.green('✅ Todo added!'));
      showMenu();
    });
}


function viewTodos() {
  console.log(chalk.yellowBright('\n📝 Your Todos:'));
  if (todos.length === 0) {
    console.log(chalk.gray('  No todos yet.'));
  } else {
    todos.forEach((todo, i) => {
      console.log(`${chalk.cyan(i + 1)}. ${todo}`);
    });
  }
  console.log('');
  showMenu();
}


function deleteTodo() {
  if (todos.length === 0) {
    console.log(chalk.red('🚫 No todos to delete.'));
    return showMenu();
  }

  inquirer.prompt([
      {
        type: 'list',
        name: 'todoToDelete',
        message: 'Select a todo to delete:',
        choices: todos.map((todo, index) => ({
          name: todo,
          value: index,
        })),
      },
    ])
    .then((res) => {
      const removed = todos.splice(res.todoToDelete, 1);
      console.log(chalk.red(`🗑 Deleted: "${removed[0]}"`));
      showMenu();
    });
}


showWelcome();