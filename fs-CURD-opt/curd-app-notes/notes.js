import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "note.txt");

export const createFile = (text) => {
    fs.writeFileSync(filePath, text);
    console.log("Notes created!!");
}

export const readFile = () => {
    if(fs.existsSync(filePath)){
        const data = fs.readFileSync(filePath, "utf-8");
        console.log("Your note is: ", data);
    } else {
        console.log("No notes Found!!");
    }
}

export const updateFile = (newText) => {
    if(fs.existsSync(filePath)) {
        fs.appendFileSync(filePath, `\n${newText}`);
        console.log("Notes updated!!");
    } else {
        console.log("No notes found to update!");
    }
}

export const overwriteFile = (newText) => {
    if(fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, `\n${newText}`);
        console.log("Notes updated!!");
    } else {
        console.log("No notes found to overwrite!");
    }
}

export const deleteFile = () =>{
    if(fs.existsSync(filePath)){
        fs.unlinkSync(filePath);
        console.log("Notes Deleted!!!");
    } else {
        console.log("Notes is Empty! Not Found !");
    }
}

// export default {createFile, readFile, updateFile, deleteFile};e