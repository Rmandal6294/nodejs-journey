import figlet from 'figlet';
import boxen from 'boxen';
import chalk from 'chalk';

figlet('My CLI App', (err, data) => {
    if (err) return console.log('Something went wrong...');
    const box = boxen(data, {
        padding: 1,
        margin: 1,
        borderStyle: 'double'
    });
    console.log(chalk.cyan(box));
});
