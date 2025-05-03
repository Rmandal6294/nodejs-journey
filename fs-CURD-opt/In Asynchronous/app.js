import { createFile, readFile, appendFile, replaceFile, deleteFile } from './note.js';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=====================\nNOTES APPLICATION\n==================\n");
console.log("1. Create File\n2. Read File\n3. Append/Update File\n4. Overwrite/Replace File\n5. Delete File\n6. End Program\n");

async function noteApp() {
    rl.question("/> ", async (choice) => {
        const numChoice = Number(choice);

        if ([1, 3, 4].includes(numChoice)) {
            rl.question("Enter your note: ", async (note) => {
                if (numChoice === 1) await createFile(note);
                if (numChoice === 3) await appendFile(note);
                if (numChoice === 4) await replaceFile(note);
                console.log("Operation completed.\n");
                noteApp(); 
            });
        } else if (numChoice === 2) {
            await readFile();
            noteApp(); 
        } else if (numChoice === 5) {
            await deleteFile();
            noteApp(); 
        } else if (numChoice === 6) {
            console.log("Program Ended..!");
            rl.close();
        } else {
            console.log("Invalid Command!!! Try Again \n");
            noteApp();
        }
    });
}

noteApp();

