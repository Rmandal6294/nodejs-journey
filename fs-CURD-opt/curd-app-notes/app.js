import {createFile, readFile, updateFile, overwriteFile, deleteFile} from './notes.js'

//! process.argv is use for take input from command line
const command = process.argv[2]; // argv[2] = this is the command (like create, read)
const input = process.argv.slice(3).join(" ");// argv[3] = this is the content that you what to write

switch(command) {
    case 'create':
        createFile(input || 'Empty note'); // run - node app.js create "This is me." 
        break;

    case 'read':
        readFile(); // run -  node app.js read
        break;

    case 'update':
        updateFile(input || 'Empty note'); // run - node app.js update "This is updated me."
        break;

    case 'overwrite':
        overwriteFile(input || 'Empty note!');
        break;

    case 'delete':
        deleteFile(); //  run - node app.js delete
        break;

    default:
        console.log("Your enter wrong command!! enter like (create/read/update/delete)");
}