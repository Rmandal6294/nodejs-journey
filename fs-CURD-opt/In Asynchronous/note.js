import {promises as fs} from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "note.txt");

export const createFile = async (text) => {
    try {
        await fs.writeFile(filePath, text);
        console.log("Note created!");
    } catch (err) {
        console.log("Error creating note: ", err);
    }
};

export const readFile = async() => {
    try {
        const data = await fs.readFile(filePath, "utf-8");
        console.log("Your note is: \n", data);
    } catch (err){
        if(err.code === "ENOENT") {
            console.log("No note found !!!");
        } else {
            console.log("Error reading note: ", err);
        }
    }
};

export const appendFile = async(newText) => {
    try {
        await fs.appendFile(filePath, `\n${newText}`);
        console.log("Content Append Successfully!");
    } catch(err) {
        if(err.code === "ENOENT") {
            console.log("No note found !!!");
        } else {
            console.log("Error appending note: ", err);
        }
    }
};

export const replaceFile = async(newText) => {
    try {
        await fs.writeFile(filePath, `\n${newText}`);
        console.log("Content Replace Successfully!");
    } catch(err) {
        console.log("Error replace note: ", err);
    }
};

export const deleteFile = async() => {
    try {
        await fs.unlink(filePath);
        console.log("Content Deleted Successfully!");
    } catch(err) {
        if(err.code === "ENOENT") {
            console.log("No note found !!!");
        } else {
            console.log("Error deleting note: ", err);
        }
    }
};

